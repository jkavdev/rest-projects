package br.com.jkavdev.groups.domain.evento;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.core.style.ToStringCreator;

@Entity
public class Endereco {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String logradouro;

	@NotBlank
	private String numero;
	
	@NotBlank
	private String bairro;

	@NotBlank
	private String cidade;

	@NotNull
	@Enumerated(EnumType.STRING)
	private UF uf;

	@NotBlank
	private String cep;

	private String complemento;
	
	private Endereco() {}
	
	public Endereco(String logradouro, String numero, String cidade, UF uf, String cep, String complemento, String bairro) {
		this.logradouro = logradouro;
		this.numero = numero;
		this.cidade = cidade;
		this.uf = uf;
		this.cep = cep;
		this.complemento = complemento;
		this.bairro = bairro;
	}
	
	public static Endereco empty() {
		Endereco empty = new Endereco();
		empty.logradouro = "";
		empty.numero = "";
		empty.cidade = "";
		empty.uf = UF.NONE;
		empty.cep = "";
		empty.complemento = "";
		empty.bairro = "";
		return empty;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Endereco other = (Endereco) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return new ToStringCreator(this)
				.append("id", id)
				.append("logradouro", logradouro)
				.append("numero", numero)
				.append("bairro", bairro)
				.append("cidade", cidade)
				.append("uf", uf)
				.append("cep", cep)
				.append("complemento", complemento).toString();
	}
	
}
