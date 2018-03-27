package br.com.jkavdev.groups.domain.grupo;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.jkavdev.groups.event.RecursoCriadoEvent;
import br.com.jkavdev.groups.utils.ServiceMap;

@RestController
@RequestMapping("/grupos")
public class GrupoController implements ServiceMap {

	@Autowired
	private GrupoService grupoService;
	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping(params = "pesquisa")
	private List<Grupo> filtrar(GrupoFilter filter) {
		return grupoService.filtrar(filter);
	}
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	private void remover(@PathVariable Long id) {
		grupoService.remover(id);
	}
	@PostMapping
	public ResponseEntity<Grupo> criar(@Valid @RequestBody Grupo grupo, HttpServletResponse response) {
		Grupo grupoSalvo = grupoService.salvar(grupo);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, grupoSalvo.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(grupoSalvo);
	}

}
