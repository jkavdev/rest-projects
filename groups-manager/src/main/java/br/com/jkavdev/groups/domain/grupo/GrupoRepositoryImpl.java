package br.com.jkavdev.groups.domain.grupo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.util.StringUtils;

public class GrupoRepositoryImpl implements GrupoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@SuppressWarnings("deprecation")
	@Override
	public List<Grupo> filtrar(GrupoFilter filter) {
		Session session = manager.unwrap(Session.class);
		Criteria criteria = session.createCriteria(Grupo.class);

		if (StringUtils.hasText(filter.getNome())) {
			criteria.add(Restrictions.ilike("nome", filter.getNome(), MatchMode.START));
		}

		return criteria.list();
	}

}
