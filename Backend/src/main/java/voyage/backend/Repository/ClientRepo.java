package voyage.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import voyage.backend.Model.Client;
@Repository
public interface ClientRepo extends JpaRepository<Client,Long> {
}
