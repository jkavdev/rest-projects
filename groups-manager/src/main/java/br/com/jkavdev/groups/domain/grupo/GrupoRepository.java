package br.com.jkavdev.groups.domain.grupo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GrupoRepository extends JpaRepository<Grupo, Long>, GrupoRepositoryQuery {
	
	@Query("SELECT COUNT(g) FROM Grupo g JOIN g.integrantes WHERE g.id = ?1")
	Long countByIntegrantes(Long id);
	@Query(nativeQuery = true, value = "SELECT COUNT(g.grupo_id) FROM Grupo_integrante g WHERE g.grupo_id = ?1")
	Long countByIntegrantes1(Long id);

}
