import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testUsers() {
        System.out.println("------Testing----------");
        return Karate.run("classpath:features").relativeTo(getClass());
    }    

}
