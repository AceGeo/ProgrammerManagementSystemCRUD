package ace.fullstack.repository;

import ace.fullstack.entity.Programmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgrammerRepository extends JpaRepository<Programmer,Long>{
}