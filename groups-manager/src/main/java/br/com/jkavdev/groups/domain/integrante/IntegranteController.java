package br.com.jkavdev.groups.domain.integrante;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/integrantes")
@CrossOrigin("*")
public class IntegranteController {

	@Autowired
	private IntegranteRepository integranteRepository;

	@GetMapping(params = "pesquisa")
	private List<Integrante> filtrar(IntegranteFilter filter) {
		return integranteRepository.filtrar(filter);
	}

}