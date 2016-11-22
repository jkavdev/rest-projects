package br.com.jkavdev.rest.locadora.dao;

import java.util.List;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import br.com.jkavdev.rest.locadora.domain.Fabricante;

@Dependent
public class FabricanteDao {

	@Inject
	private EntityManager entityManager;

	public List<Fabricante> buscaTodos() {
		return this.entityManager.createQuery("from Fabricante", Fabricante.class).getResultList();
	}

}
