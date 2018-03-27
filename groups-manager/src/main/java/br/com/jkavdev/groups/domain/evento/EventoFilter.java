package br.com.jkavdev.groups.domain.evento;

import java.time.LocalDateTime;

public class EventoFilter {
	
	private LocalDateTime de;
	private LocalDateTime ate;
	
	public LocalDateTime getDe() {
		return de;
	}
	public void setDe(LocalDateTime de) {
		this.de = de;
	}
	public LocalDateTime getAte() {
		return ate;
	}
	public void setAte(LocalDateTime ate) {
		this.ate = ate;
	}
	
	@Override
	public String toString() {
		return "EventoFilter [de=" + de + ", ate=" + ate + "]";
	}
	
}
