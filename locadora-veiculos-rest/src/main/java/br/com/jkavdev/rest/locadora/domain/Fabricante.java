package br.com.jkavdev.rest.locadora.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "fabricante")
public class Fabricante extends BaseEntity {

	private static final long serialVersionUID = 1L;

	private String nome;

	@Column(length = 50, nullable = false)
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
