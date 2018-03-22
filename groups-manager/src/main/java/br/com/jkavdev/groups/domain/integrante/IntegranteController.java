package br.com.jkavdev.groups.domain.integrante;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/integrantes")
@CrossOrigin("*")
public class IntegranteController {

	@Autowired
	private IntegranteRepository integranteRepository;
	@Autowired
	private IntegranteService integranteService;

	@GetMapping(params = "pesquisa")
	private List<Integrante> filtrar(IntegranteFilter filter) {
		return integranteRepository.filtrar(filter);
	}

	@PutMapping("/{id}/efetivar")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void efetivarCadastro(@PathVariable Long id) {
		integranteService.efetivarCadastro(id);
	}

}
