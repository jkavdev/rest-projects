package br.com.jkavdev.groups.domain.evento;

import java.math.BigDecimal;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.core.style.ToStringCreator;

import br.com.jkavdev.groups.domain.grupo.Grupo;

@Entity
public class Evento {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private LocalTime data;
	
	@NotBlank
	private String descricao;
	
	@NotBlank
	private String motivo;
	
	private BigDecimal valor;
	
	@NotNull
	@Column(name = "lotacao_maxima")
	private int lotacaoMaxima;
	
	@NotNull
	@OneToOne
	@JoinColumn(name = "endereco_id")
	private Endereco endereco;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "grupo_id")
	private Grupo grupo;
	
	private Evento() {}

	public Evento(LocalTime data, String descricao, String motivo, BigDecimal valor, int lotacaoMaxima,
			Endereco endereco, Grupo grupo) {
		this.data = data;
		this.descricao = descricao;
		this.motivo = motivo;
		this.valor = valor;
		this.lotacaoMaxima = lotacaoMaxima;
		this.endereco = endereco;
		this.grupo = grupo;
	}
	
	public static Evento empty() {
		Evento empty = new Evento();
		empty.data = LocalTime.now();
		empty.descricao = "";
		empty.motivo = "";
		empty.valor = BigDecimal.ZERO;
		empty.lotacaoMaxima = 0;
		empty.endereco = Endereco.empty();
		empty.grupo = Grupo.empty();
		return empty;
	}
	
	public Long getId() {
		return id;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	public void setGrupo(Grupo grupo) {
		this.grupo = grupo;
	}
	
	@Override
	public String toString() {
		return new ToStringCreator(this)
				.append("id", id)
				.append("data", data)
				.append("descricao", descricao)
				.append("valor", valor)
				.append("lotacaoMaxima", lotacaoMaxima).toString();
	}

}
