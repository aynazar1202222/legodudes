export default function Nav() {
  const categories =[
      {
          id:1,
          name: "City",
      },
      {
          id:2,
          name:"Ninjago",
      },
      {
          id:3,
          name:"Casties and Knight",
      },
      {
          id:4,
          name:"Marine and Pirats",
      },
      {
          id:5,
          name:"Movie Characters",
      },
  ];
  return(
      <nav>
          <ul>
              {categories.map(category=> <NavItems category={category} />)}
          </ul>
      </nav>
  );
}