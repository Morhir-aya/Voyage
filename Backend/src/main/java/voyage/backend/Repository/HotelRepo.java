package voyage.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import voyage.backend.Model.Hotel;
@Repository
public interface HotelRepo extends JpaRepository<Hotel,Long> {
}
