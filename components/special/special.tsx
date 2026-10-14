import SpecialCoffee from "./coffee/special-coffee";
import SpecialDessert from "./dessert/special-dessert";

function Special() {
  return (
    <section className="max-[57.1875rem]:p-3.5">
      <SpecialCoffee />
      <SpecialDessert />
    </section>
  );
}

export default Special;
