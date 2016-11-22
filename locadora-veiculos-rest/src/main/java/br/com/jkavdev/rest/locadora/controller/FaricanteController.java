package br.com.jkavdev.rest.locadora.controller;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.jkavdev.rest.locadora.domain.Fabricante;
import br.com.jkavdev.rest.locadora.service.FabricanteService;

@Path("/fabricante")
@RequestScoped
public class FaricanteController {

	@Inject
	private FabricanteService fabricanteService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Fabricante> buscaFabricantes() {
		return this.fabricanteService.buscaTodos();
	}
	
	@Path("/novo")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvarFabricante(Fabricante fabricante){
		this.fabricanteService.salva(fabricante);
	}

}
