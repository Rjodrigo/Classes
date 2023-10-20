package pessoa;

public class TesteDePessoa {
      
    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa();
        pessoa.cpf = "333222111";
        pessoa.nome = "Rodrigo";
        pessoa.idade = 42;

        System.out.println(pessoa.idade);

    }
}