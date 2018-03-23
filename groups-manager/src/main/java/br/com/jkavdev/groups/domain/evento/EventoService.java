package br.com.jkavdev.groups.domain.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventoService {
	
	@Autowired
	private EventoRepository eventoRepository;
	
	public Evento salvar(Evento evento) {
		return eventoRepository.save(evento);
	}

}
