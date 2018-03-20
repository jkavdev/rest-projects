package br.com.jkavdev.groups.domain.integrante;

public class IntegranteFilter {
	
	private String nome;
	private String grupo;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getGrupo() {
		return grupo;
	}
	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}
	
	@Override
	public String toString() {
		return "IntegranteFilter [nome=" + nome + ", grupo=" + grupo + "]";
	}

}
