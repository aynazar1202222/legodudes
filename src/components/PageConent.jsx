import CategoryHeading from "/CategoryHeading";
import ProduxtCard from "./ProductCard";

 <main>
        {/* Viser overskrift for kategorien */}
        <CategoryHeading title="Ninjago" />

        {/* Produktliste-seksjon */}
        <div id="productlist">
          {/* Mapper gjennom produktlisten og genererer en ProductCard-komponent for hvert produkt */}
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>

        {/* Kommentarert ut HTML-kode som viser eksempler på produkter */}
        {/* 
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
        */}
      </main>