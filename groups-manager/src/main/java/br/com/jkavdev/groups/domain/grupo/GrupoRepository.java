package br.com.jkavdev.groups.domain.grupo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GrupoRepository extends JpaRepository<Grupo, Long>, GrupoRepositoryQuery {
	
	@Query("SELECT g FROM Grupo g JOIN FETCH g.integrantes WHERE g.id = ?1")
	Grupo findByIdFetchIntegrantes(Long id);

}
