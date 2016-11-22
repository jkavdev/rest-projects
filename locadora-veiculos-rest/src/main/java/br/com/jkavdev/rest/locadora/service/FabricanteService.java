package br.com.jkavdev.rest.locadora.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.jkavdev.rest.locadora.dao.FabricanteDao;
import br.com.jkavdev.rest.locadora.domain.Fabricante;

@Stateless
public class FabricanteService {

	@Inject
	private FabricanteDao fabricanteDao;

	public List<Fabricante> buscaTodos() {
		return this.fabricanteDao.buscaTodos();
	}

}
