package br.com.jkavdev.groups.domain.grupo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.jkavdev.groups.domain.integrante.Integrante;
import br.com.jkavdev.groups.domain.integrante.IntegranteRepository;
import br.com.jkavdev.groups.exceptionhandler.NegocioException;

@Service
public class GrupoService {

	@Autowired
	private GrupoRepository grupoRepository;
	@Autowired
	private IntegranteRepository integranteRepository;

	public void remover(Long id) {

		if (grupoRepository.countByIntegrantes(id) > 0) {
			throw new NegocioException("grupo.com-integrantes");
		}

		grupoRepository.deleteById(id);
	}

	public List<Grupo> filtrar(GrupoFilter filter) {
		return grupoRepository.filtrar(filter);
	}

	public Grupo salvar(Grupo grupo) {
		return grupoRepository.save(grupo);
	}

	public void adicionarIntegrante(Long idGrupo, Long idIntegrante) {
		Optional<Grupo> opGrupo = grupoRepository.findByIdFetchIntegrantes(idGrupo);
		opGrupo.orElseThrow(() -> new EmptyResultDataAccessException(1));
		Optional<Integrante> opIntegrante = integranteRepository.findById(idIntegrante);
		opIntegrante.orElseThrow(() -> new EmptyResultDataAccessException(1));
		
		Grupo grupo = opGrupo.get();
		grupo.adicionar(opIntegrante.get());
		
		grupoRepository.save(grupo);
	}

}
