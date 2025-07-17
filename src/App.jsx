import "./App.css";
import Header from "./assets/components/Header";
import Description from "./assets/components/Description";
import Carousel from "./assets/components/Carousel";
import TitleSection from "./assets/components/TitleSection";
import Author from "./assets/components/Author";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>  
      {/* Utilizando o componente Header */}
      <Header />

      <main>

        {/* section About */}
        <section className="container-xxl">
          <div className="about d-flex flex-column flex-md-row align-items-center">
            <div className="about__movie--cover ">
              <img src="/img/capa.png" alt="Capa--Barbie" />
            </div>
            <div className="about__movie--description">
              <div className="row">
                <article className="mb-md-3 mb-0">
                  <div className="about__movie--description--title col-12">
                    <h1>
                      Barbie <span style={{ opacity: 0.5 }}>(2023)</span>
                    </h1>
                  </div>
                  {/* Utilizando o componente Description com props para exibir informações do filme */}
                  <Description
                    h3="Gênero"
                    p="Comédia, Aventura, Fantasia"
                    className={"col-12"}
                  />
                  <Description
                    h3="Sinopse"
                    p='No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.'
                    className={"col-12"}
                  />
                </article>
                <Description
              
                  h3="Dirigido por:"
                  p="Greta Gerwig"
                  className={"col-md-6 col-12"}
                />
                <Description
                  h3="Escrito por:"
                  p="Greta Gerwig, Noah Baumbach"
                  className={"col-md-6 col-12"}
                />
                <Description
                  h3="Situação:"
                  p="Lançado"
                  className={"col-md-6 col-12"}
                />
                <Description
                  h3="Idioma original:"
                  p="Inglês"
                  className={"col-md-6 col-12"}
                />
                <Description
                  h3="Orçamento:"
                  p="$145,000,000.00"
                  className={"col-md-6 col-12 mb-4"}
                />
                <Description
                  h3="Bilheteira:"
                  p="$1,280,313,193.00"
                  className={"col-md-6 col-12 mb-4"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* section Carousel */}
        <section className="carousel d-flex flex-column justify-content-center align-items-center">
          <TitleSection title="Elenco" />
          <Carousel />
        </section>

        {/* section Reviews */}
        <section className="reviews">
          <TitleSection title="Resenhas" />
          <div className="container-xxl">
            <div className="row">
              <div className="reviews__container d-flex flex-column flex-md-row col-12">
                <div className="reviews__container--item col-12 col-md-6">
                  <p className="">
                    Um filme super divertido, muito engraçado e reflexivo acerca
                    da vida e da nossa sociedade. Em sua grande maioria,
                    apresenta críticas pontuais, bem escritas e muito
                    inteligentes, porém, há momentos em que essas críticas se
                    tornam repetitivas, o que foi um pequeno e praticamente
                    único problema para mim. De resto, é tudo perfeito, as
                    atuações estão impecáveis, Ryan Gosling e Margot Robbie
                    estão incríveis, a direção de Greta Gerwig também é ótima. É
                    um filme que acerta em cheio, tanto no público jovem quanto
                    no público mais velho, e que consegue ser divertido e
                    reflexivo ao mesmo tempo. É um filme que vale a pena ser
                    assistido, e que certamente vai agradar a todos os públicos.
                  </p>
                  {/* Exibindo o componente Author para mostrar informações do autor da resenha */}
                  <Author
                    name="Hementon Renner"
                    date="21 de julho de 2023"
                    rate="9"
                  />
                </div>
                <div className="reviews__container--item col-12 col-md-6">
                  <p className="">
                    Título: Uma Celebração Encantadora e Empoderadora - "Barbie"
                    (2023) <br></br>
                    <br></br>"Barbie" é uma adorável surpresa cinematográfica
                    que honra o icônico ícone cultural que é a boneca Barbie.
                    Sob a brilhante interpretação de Margot Robbie, o filme é um
                    verdadeiro deleite, repleto de charme, humor e
                    vulnerabilidade, o que torna Robbie uma escolha perfeita
                    para dar vida à amada boneca. A direção de Greta Gerwig é
                    excepcional, trazendo uma visão única e inovadora para a
                    história, enquanto o roteiro, co-escrito por Gerwig e Noah
                    Baumbach, é inteligente e envolvente, equilibrando momentos
                    de comédia e emoção de forma magistral. A cinematografia é
                    deslumbrante, capturando a essência vibrante do mundo de
                    Barbie, e a trilha sonora é cativante, complementando
                    perfeitamente a narrativa. O filme aborda temas importantes
                    de empoderamento feminino e autoaceitação de maneira
                    sensível e inspiradora, fazendo com que o público se sinta
                    conectado emocionalmente com a história. "Barbie" é uma
                    celebração encantadora e empoderadora que certamente deixará
                    uma marca duradoura no coração dos espectadores. É um filme
                    que transcende gerações, trazendo uma mensagem positiva e
                    relevante para todos. Se você está procurando uma
                    experiência cinematográfica divertida e significativa,
                    "Barbie" é uma escolha imperdível. Com atuações brilhantes,
                    uma direção excepcional e uma história envolvente, este
                    filme é uma verdadeira obra-prima que merece ser apreciada
                    por todos.
                  </p>
                  <Author
                    name="Achilles"
                    date="26 de julho de 2023"
                    rate="10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
