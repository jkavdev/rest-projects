package br.com.jkavdev.groups.domain.evento;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import br.com.jkavdev.groups.domain.evento.dto.EventoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.jkavdev.groups.event.RecursoCriadoEvent;
import br.com.jkavdev.groups.utils.ServiceMap;

@RestController
@RequestMapping("/eventos")
public class EventoController implements ServiceMap {
	
	@Autowired
	private EventoService eventoService;
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<Evento> salvar(@Valid @RequestBody Evento evento, HttpServletResponse response) {
		Evento eventoSalvo = eventoService.salvar(evento);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, eventoSalvo.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(eventoSalvo);
	}
	@GetMapping(params = "pesquisa")
	private List<EventoDTO> filtrar(EventoFilter filter) {
		return eventoService.filtrar(filter);
	}

}
