package br.com.jkavdev.groups.domain.integrante;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.jkavdev.groups.event.RecursoCriadoEvent;
import br.com.jkavdev.groups.utils.ServiceMap;

@RestController
@RequestMapping("/integrantes")
public class IntegranteController  implements ServiceMap {

	@Autowired
	private IntegranteService integranteService;
	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping(params = "pesquisa")
	private List<Integrante> filtrar(IntegranteFilter filter) {
		return integranteService.filtrar(filter);
	}
	@PutMapping("/{id}/efetivar")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void efetivarCadastro(@PathVariable Long id) {
		integranteService.efetivarCadastro(id);
	}
	@PostMapping
	public ResponseEntity<Integrante> criar(@Valid @RequestBody Integrante integrante, HttpServletResponse response) {
		Integrante integranteSalvo = integranteService.salvar(integrante);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, integranteSalvo.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(integranteSalvo);
	}
	@PostMapping("/validarcpf")
	public void validarCpf(@Valid @RequestBody IntegranteFilter filter) {
		System.out.println(filter.getCpf());
	}

}
