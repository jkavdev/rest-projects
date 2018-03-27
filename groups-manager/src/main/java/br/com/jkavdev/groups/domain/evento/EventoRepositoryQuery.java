package br.com.jkavdev.groups.domain.evento;

import java.util.List;

public interface EventoRepositoryQuery {

	List<Evento> filtrar(EventoFilter filter);

}
