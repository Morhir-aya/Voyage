package voyage.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;
    @NonNull
    private String telephone;
    @NonNull
    private String email;
    @ManyToMany(mappedBy = "clientSet")
    private Set<Hotel> hotelSet = new HashSet<>();
    @ManyToMany(mappedBy = "clientSet")
    private Set<Vol> volSet = new HashSet<>();

}
