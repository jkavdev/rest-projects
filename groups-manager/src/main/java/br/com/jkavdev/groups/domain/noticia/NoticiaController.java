package br.com.jkavdev.groups.domain.noticia;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<Noticia> salvar(@RequestBody Noticia noticia, HttpServletResponse response) {
		Noticia noticiaSalva = noticiaRepository.save(noticia);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, noticiaSalva.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(noticiaSalva);
	}

}
