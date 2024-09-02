
import Card from './Card';
import Banner from './Banner';
import './Home.css';

const Home = () => {
  
  return (
     <div className='home'>
      <Banner />
      <div className="home-section">
        <Card
          src="https://a0.muscache.com/im/pictures/3511e981-85a6-4b10-9adf-89e4b9b398a6.jpg?im_w=720"
          title="Tent in Wadi Rum Village, Jordan"
          decription="Xairu is the San word meaning “paradise”. Surrounded by nature and a 10-minute drive from Montagu, Xairu certainly lives up to its name. The house is situated in a private 40ha Eco-Reserve of only five houses. If it's tranquillity you are seeking, then this is the place. With breath-taking lake and mountain views and stunning sunrises from the porch, this beautiful French-style thatch home offers comfortable farm style living. Located in the centre of local peach and apricot farmlands."
          price="R7500"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/c090664b-ef1e-445b-a417-87574966c989.jpg?im_w=720"
          title="Private room in farm stay in Kaapschehoop, South Africa"
          decription="Spend a night of romance or relaxation in an intimate cottage situated on The Dragon Fruit Farm, not far from the homestead 
          Unplug and immerse yourself in the lush beauty that the Garden Route is famous for. Enjoy a walk in the landscaped gardens or a hike through the natural yellowwood forests or hole up at the self-catering cottage, where there is fresh spring water on tap and the shower & bath are both big enough for two"
          price="R5000"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48686572/original/701513de-7285-46a2-9262-2f771c83f527.jpeg?im_w=720"
          title="Tent in South Africa"
          decription="Cloud Cottage is located on Voogsekraal estate. The estate stretches along the mountainous and truly breathtaking Prince Alfred Pass. The estate forms part of the Outeniqua Mountains. This means exquisite views, waterfalls and walks. 
          The cottage is nestled into the hillside, amidst rockery and fynbos. With no neighbouring farms, cell reception, nor electricity, one is able to experience a true getaway."
          price="R10000"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/bc629d4f-89f0-4ce2-827a-e0c651dd76a1.jpg?im_w=720"
          title="Tent in Lake Elmenteita, Kenya"
          decription="Modern, self catering, 'load shedding friendly', 6 sleeper farmhouse in the heart of the Natal Midlands, with beautiful dam views.  One of three units on the property, (The other being a 4 Sleeper cottage - see 'Pennygrove Cottage'  and another 6 sleeper - 'Nguni Cottage' on AirBnB) This unit is the largest unit, and is equipped with everything you will need for a comfortable midlands break away.  Lovely walks on the property, and the dam is stocked with bass for the keen fisherman."
          price="R8500"
        />
      </div>

      <div className="home-section">
        <Card
          src="https://a0.muscache.com/im/pictures/bc629d4f-89f0-4ce2-827a-e0c651dd76a1.jpg?im_w=720"
          title="Private room in tent in Ciudanovița, Romania"
          decription="Come indulge yourself with 4 of the Big 5 right on your doorstep! Our fully upgraded Bushveld Farmhouse is located in the popular Mabalingwe Nature Reserve. 
          Accommodating up to 7 guests, The Bushveld Farmhouse features spacious living areas, a modern kitchen, 3 bedrooms and 2 bathrooms.  Outside there is a covered braai/dining area, swimming pool and a watering hole where the animals come in to drink."
          price="R9500"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/2d5f7155-7458-4eb9-a7d3-753863d9eb45.jpeg?im_w=720"
          title="Room in Kecamatan Kintamani, Indonesia"
          decription="The fisherman's cottage is situated right on the water's edge and has a panoramic view of the dam and indigenous forest. Relax and enjoy the abundant bird life or tumble out of bed to cast a line for bass. The cottage is centrally located on the Midlands Meander in the Balgowan area, and is close to popular restaurants and wedding venues."
          price="R14500"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1050288737052395379/original/bea28dda-610b-4fb2-a749-551239881883.jpeg?im_w=720"
          title="Tent in Chastreix, France"
          decription="Perfect for a relaxing couple's mountain getaway or work remotely. The garden boasts 200 year old trees and abundant bird life. Enjoy panoramic mountain views from the veranda. The cottage boasts an uber comfy king size bed, fluffy towels included. En-suite bathroom with walk-in shower. Well equipped kitchen with Nespresso machine. Fast WIFI. Netflix. Cozy fireplace for cold days. Fire pit. All self-catering. Explore nearby shops and restaurants or hike in the berg."
          price="R11500"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-46272064/original/784fdaac-90fd-48ec-a9e9-3aaf312bdab8.jpeg?im_w=720"
          title="Tent in São Vicente, Portugal"
          decription="Olde world charm, minimalistic but stylishly chick. Environmentally friendly with minimal electricity usage. Basic mod cons like fridge freezer and fan. Gas geyser and stove. No television, WiFi and minimum network coverage.  Luxury linen and comfort. Suited for a couple, a family or a couple of friends seeking adventure. Make this your home from home."
          price="R8500"
        />
    </div>
    </div>
  );
};

export default Home;