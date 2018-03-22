package br.com.jkavdev.groups.domain.noticia;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.jkavdev.groups.event.RecursoCriadoEvent;

@RestController
@RequestMapping("/noticias")
@CrossOrigin("*")
public class NoticiaController {

	@Autowired
	private NoticiaRepository noticiaRepository;
	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping("/topicos")
	public Topico[] topicos() {
		return Topico.values();
	}
	@PostMapping
	public ResponseEntity<Noticia> salvar(@RequestBody @Valid Noticia noticia, HttpServletResponse response) {
		Noticia noticiaSalva = noticiaRepository.save(noticia);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, noticiaSalva.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(noticiaSalva);
	}
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable @Valid @NotNull Long id) {
		noticiaRepository.deleteById(id);
	}
	@GetMapping
	public List<Noticia> listar() {
		return noticiaRepository.findAll();
	}

}
