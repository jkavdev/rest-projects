package br.com.jkavdev.groups.domain.grupo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/grupos")
@CrossOrigin("*")
public class GrupoController {

	@Autowired
	private GrupoRepository grupoRepository;

	@GetMapping(params = "pesquisa")
	private List<Grupo> filtrar(GrupoFilter filter) {
		return grupoRepository.filtrar(filter);
	}

}