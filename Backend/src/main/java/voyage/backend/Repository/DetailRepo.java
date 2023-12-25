package voyage.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import voyage.backend.Model.Details;
@Repository
public interface DetailRepo extends JpaRepository<Details,Long> {
}
