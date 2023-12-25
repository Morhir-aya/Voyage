package voyage.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import voyage.backend.Model.Vol;
@Repository
public interface VolRepo extends JpaRepository<Vol,Long> {
}
