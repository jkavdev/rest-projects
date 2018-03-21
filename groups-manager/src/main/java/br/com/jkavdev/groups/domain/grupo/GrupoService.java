package br.com.jkavdev.groups.domain.grupo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jkavdev.groups.exceptionhandler.NegocioException;

@Service
public class GrupoService {

	@Autowired
	private GrupoRepository grupoRepository;

	public void remover(Long id) {

		if (grupoRepository.countByIntegrantes1(id) > 0) {
			throw new NegocioException("grupo.com-integrantes");
		}

		grupoRepository.deleteById(id);
	}

}
