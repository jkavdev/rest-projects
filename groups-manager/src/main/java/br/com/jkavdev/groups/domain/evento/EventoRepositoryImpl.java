package br.com.jkavdev.groups.domain.evento;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;

public class EventoRepositoryImpl implements EventoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@SuppressWarnings({ "deprecation", "unchecked" })
	@Override
	public List<Evento> filtrar(EventoFilter filter) {
		Session session = manager.unwrap(Session.class);
		Criteria criteria = session.createCriteria(Evento.class);

		return criteria.list();
	}

}
