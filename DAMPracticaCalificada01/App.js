import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, FlatList, StyleSheet, Text,Button, Image,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
  {
      id:1,
      title:'Valve',
      desc:('VALVE fue fundada en 1996 por Gabe Newell y Mike Harrington. Ambos eran trabajadores del gigante informático Microsoft y habían trabajado en sus sistemas operativos Windows y OS/2 antes de pasarse al mundo del videojuego. Con Half-Life, su primer videojuego, Valve cosechó un tremendo éxito obteniendo beneficios de sus expansiones y mods. En su trabajo junto a la comunidad de jugadores se encuentran títulos como Counter-Strike o Day of Defeat. En mayo de 2003, Valve Software causó un gran revuelo en la feria Electronic Entertainment Expo al presentar lo que parecía una versión prácticamente terminada de Half-Life 2.'),
      descshort:'Valve Corporation es una empresa estadounidense desarrolladora de videojuegos. Se hizo mundialmente famosa por su primer juego, Half-Life y por una modificación de este, Counter-Strike.',
      img:'https://alternative.me/media/256/steam-icon-zkaj1ullopzk7u8a-c.png',
      bigimg:'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ZLZGLDZ4SFH3TFDDWFZKWHBIGE.png',
    },
  {
      id:2,
      title:'Atari',
      desc:'Atari es una marca que ha sido propiedad de múltiples empresas desde su creación en 1972. Actualmente es propiedad de Atari Interactive, una filial del holding francés Atari SA, conocido hasta 2002 como Infogrames Entertainment.La primera empresa Atari Inc. fue fundada en Sunnyvale, California en 1972 por Nolan Bushnell y Ted Dabney, siendo una empresa pionera en los juegos de arcade, las consolas de videojuegos domésticos y las computadoras domésticas. Los productos de la compañía, como Pong y Atari 2600, ayudaron a definir la industria del entretenimiento electrónico desde la década de 1970 hasta mediados de la década de 1980.Hasta la década de 1990, Atari se consolidó como una de las principales fabricantes de consolas en el mercado mundial, compitiendo con Nintendo y Sega. Sin embargo, el poco éxito de la Atari Jaguar, lanzada en 1993, llevó a una bancarrota de la empresa, la cual sería vendida una y otra vez a lo largo de los años. La empresa que actualmente maneja el nombre Atari fue fundada en 1993 bajo el nombre de GT Interactive. GT Interactive fue adquirido por IESA en 1999 y cambió su nombre a Infogrames Inc. Infogrames adquirió la marca Atari, comprándola a Hasbro Interactive, que a su vez la adquirió de manos de JTS Corporation. ',
      descshort:'Para algunos será injusto el primero puesto y para otros no. Atari significó mucho en el mundo de los videojuegos y al día de hoy sigue siendo de las marcas más reconocidas. Fundada en 1972, nos dio grandes nombres como el pionero PongyArea 51.',
      img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4ad36332-03b9-4804-aad7-acc8455a1109/d42b4uz-b4014b40-a24a-4f13-a636-e7073086a9e1.png/v1/fill/w_256,h_256,q_80,strp/atari_logo_icon_by_mahesh69a_d42b4uz-fullview.jpg',
      bigimg:'https://i.blogs.es/eb0261/atari-vcs/1366_521.jpg',
    },
  {
      id:3,
      title:'Konami',
      desc:'El nombre "Konami" es una conjunción de los nombres Kagemasa Kozuki, Yoshinobu Nakama, Hiro Matsuda, y Shokichi Ishihara, quienes fueron los socios de Kozuki y los fundadores originales de Konami Industry Co., Ltd en 1973. Konami también significa «olas pequeñas». Tiene actualmente sus bases en Tokio y adicionalmente opera clubes de salud y ejercicio en Japón.Konami ha sido el responsable de la creación de 6 de las franquicias más exitosas en la historia de los videojuegos: Castlevania, Contra, Metal Gear Solid, Silent Hill, Dance Dance Revolution (que fue el parte aguas para la creación de este tipo de juegos como Pump It Up de Andamiro) y Pro Evolution Soccer (desde su primer videojuego, International Superstar Soccer), así como ser la creadora de videojuegos exitosos, basados en series, caricaturas y películas, tales son los casos de los videojuegos de las caricaturas Tiny Toon Adventures, Animaniacs y Tortugas Ninja, así como el videojuego Batman Returns, basado en la película homónima, y haber desarrollado el considerado mejor videojuego de arcade de todos los tiempos: The Simpsons Arcade Game. Aunado a eso, también ha sido la creadora de la franquicia de cartas coleccionable de Yu-Gi-Oh!, basados en el popular ánime japonés, logrando un gran éxito (y ser la única que le pudo hacer frente al éxito del también juego de cartas Magic: El encuentro). ',
      descshort:'Otra de las pioneras japonesas. Creada en 1969, es imposible olvidar el InternationalSuperstar Soccer,Sunset Riders yThe Simpsons.',
      img:'https://image.flaticon.com/icons/png/128/588/588270.png',
      bigimg:'https://i.blogs.es/7ef5ce/040620-konami/840_560.jpeg',
  },
  {
    id:4,
    title:'Capcom',
    desc:'apcom Co., Ltd. (株式会社カプコン Kabushiki-gaisha Kapukon?, TYO: 9697) es una empresa japonesa desarrolladora y distribuidora de videojuegos. Fue fundada en 1979 como Japan Capsule Computers, una empresa dedicada a la fabricación y distribución de máquinas de videojuegos. Su actual nombre es el resultado de unir Capsule Computers. En 2016 Capcom Ent., Inc. se mudó a San Francisco. Capcom ha creado algunas de las series más famosas y duraderas de la historia de los videojuegos, como son Street Fighter, Dino Crisis, Monster Hunter, Mega Man, Ghosts & Goblins, Resident Evil y Devil May Cry. ',
    descshort:'Capcom se suma al grupo de las empresas japonesas exitosas. Se fundó en 1979 y desde entonces entregó títulos como Final Fight, Resident Evil y Street Fighter.',
    img:'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397183382/6719dc18d2a03c266ca22b8f488e4b56.png',
    bigimg:'https://impulsogeek.com/wp-content/uploads/2020/03/Capcom-Games.jpg',
},
{
  id:5,
  title:'Namco',
  desc:'Namco fue fundada en 1955 por Masaya Nakamura, en Tokio, Japón. El nombre Namco viene de NAkamura Manufacturing COmpany.En 1985, la empresa cumplió 30 años y una película producida por United Artists y distribuida por Metro-Goldwyn-Mayer refleja ese hecho con la aparición de su logo En 2004 la empresa ganó 1600 millones de dólares. El negocio principal de la empresa es el desarrollo y la distribución de máquinas recreativas, videojuegos para el hogar (videoconsolas), contenidos para la televisión y servicios móviles. También trabaja en otras líneas de negocio en todo el mundo. En 2005 se fusionó con Bandai, una de las mayores jugueteras de Japón y también productora de videojuegos, formando el holding Namco Bandai Holdings, para afrontar mejor las dificultades y costes, para programar para la nueva generación de consolas. ',
  descshort:'Otra de las veteranas entre veteranas. Originalmente fundada en 1955, títulos comoPac-Man, Galaxian y Tekken fueron clásicos de los arcades.',
  img:'https://image.flaticon.com/icons/png/128/871/871375.png',
  bigimg:'https://www.techgames.com.mx/wp-content/uploads/2020/06/Namco-Museum-Archives-Vol-1.jpg',
},
{
  id:6,
  title:'EA',
  desc:'Electronic Arts Inc. (EA) es una empresa estadounidense desarrolladora y distribuidora de videojuegos para ordenador y videoconsolas, fundada por Trip Hawkins.  Sus oficinas centrales están en Redwood City, California. Tiene estudios en varias ciudades de Estados Unidos, en Canadá, Suecia, Corea del Sur, China, Inglaterra y España. Posee diversas subsidiarias, como EA Sports, encargada de los simuladores deportivos, EA Games para los demás juegos, y subsidiarias adquiridas durante el tiempo como Maxis, entre otras. Electronics Arts también posee la mayor distribución del mundo en este sector, con oficinas en países como Brasil, Polonia y República Checa. Actualmente, desarrolla y publica juegos que incluyen los títulos de EA Sports FIFA, Madden NFL, NHL, NBA Live y UFC. Otras franquicias establecidas por EA incluyen Battlefield, Need for Speed, Los Sims, Medal of Honor, Command & Conquer, así como nuevas franquicias como Dead Space, Mass Effect, Dragon Age, Army of Two, Titanfall y Star Wars: The Old Republic. Sus títulos de escritorio aparecen en Origin, una plataforma de distribución digital de juegos en línea para ordenadores. Actualmente es la segunda third-party más importante de la industria de los Videojuegos, con un valor de mercado de 33 mil millones de dólares. ',
  descshort:'A pesar de que la monstruosa empresa norteamericana no para de absorber a otras, nos ha dado el FIFA, NBA Livey Need for Speed, entre otros.',
  img:'https://images.gamebanana.com/img/ico/sprays/ealogo.png',
  bigimg:'https://cdn.alfabetajuega.com/wp-content/uploads/2020/11/EA-lanzar%C3%A1-14-t%C3%ADtulos-antes-de-Abril-de-2021-1280x720-780x405.jpg',
},
{
  id:7,
  title:'Nintendo',
  desc:'Nintendo Company, Ltd. (任天堂株式会社 Nintendō Kabushiki-gaisha?) es una empresa de entretenimiento dedicada a la investigación y desarrollo, producción y distribución de software y hardware de videojuegos, y juegos de cartas, con sede en Kioto, Japón. Su origen se remonta a 1889, cuando comenzó a operar como Nintendo Koppai tras ser fundada por el artesano Fusajirō Yamauchi con el objetivo de producir y comercializar naipes Hanafuda.5​ Tras incursionar en varias líneas de negocio durante la década de 1960 y adquirir una personalidad jurídica de empresa de capital abierto bajo la razón social actual, en 1977 distribuyó su primera videoconsola en Japón, la Color TV Game 15. Sus productos incluyen algunas de las consolas y títulos más influyentes y exitosos en la industria de los videojuegos, como la Nintendo Entertainment System, la Super Nintendo Entertainment System,9​ la Wii10​11​12​ y la Game Boy;13​ así como los títulos Donkey Kong (1981), Super Mario Bros. (1985), The Legend of Zelda (1986), Metroid (1986), Tetris (Game Boy) (1989), Fire Emblem (1990), Star Fox (1993) y Pokémon Red y Blue (1996), que dieron origen a sus correspondientes franquicias. ',
  descshort:'La productora de Nintendo diseñó juegos para la empresa que se transformaron en íconos. Mario, Zelda y Star Fox son unos ejemplos.',
  img:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Nintendo-company-brand-logo.png',
  bigimg:'https://cdn02.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_3ds_28/H2x1_3DS_SystemLandingPage_v07_image1600w.jpg',
},
{
  id:8,
  title:'Ubisoft',
  desc:'Ubisoft Entertainment es una compañía francesa desarrolladora y distribuidora de videojuegos, fundada en 1986 en Carentoir, en Bretaña. Yves Guillemot, uno de los fundadores, es el actual director ejecutivo y presidente de la compañía.3​ Las oficinas centrales se ubican en Montreuil-Sous-Bois, Francia.Es la responsable de creaciones como las sagas Assassins Creed, Far Cry, Tom Clancys Splinter Cell, Prince of Persia, Rayman, Just Dance, Ghost Recon, Red Steel, Rainbow Six, Brothers in Arms, Tom Clancys H.A.W.X., Watch Dogs, For Honor y los juegos de CSI, Heroes of Might and Magic V, Tom Clancys The Division, y posee los derechos de la serie de videojuegos Driver, creada por Atari. Actualmente Ubisoft es la compañía de videojuegos más grande e importante de Europa y la cuarta third-party a nivel mundial, detrás de Activision Blizzard, Electronic Arts y Take-Two Interactive.4​ Con un valor de mercado arriba de los 9 mil millones de dólares',
  descshort:'A pesar de que para muchos es una empresa moderna ya que la reconocen por Assassins Creed, Far Cry y Tom Clancys Splinter Cell, la compañía francesa se fundó en 1986 y comenzó a desarrollar juegos en 1990.',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzDJ1YWdP8_bWiskaeveqiSUFYePvlM4QyOLKaAsmC_7Fdofh9X5X1I-SnVjvAXjP3Q4&usqp=CAU',
  bigimg:'https://cdn.wccftech.com/wp-content/uploads/2020/07/Ubisoft-Q1-2020-21-Results-01-Header.jpg',
},
{
  id:9,
  title:'LucasArts',
  desc:'La empresa fue fundada en 1982 como desarrollador de juegos de Lucasfilm Ltd. (en inglés Limited). La empresa productora de películas de George Lucas buscaba que su empresa empezase a trabajar por cuenta propia en el desarrollo de videojuegos, así que para comenzar cooperó con Atari en el desarrollo de videojuegos. El primer resultado de esta colaboración fueron los juegos de acción Ballblazer y Rescue on Fractalus!. La versión beta de estos juegos fue filtrada por piratas, exactamente una semana después de que Atari recibiera versiones desprotegidas de sus productos, los juegos fueron puestos a la venta meses después de la fecha original de lanzamiento. En 1984 los juegos fueron relanzados para la Atari 5200 bajo la marca Lucasfilm Games. La versión para PC no fue puesta en el mercado hasta 1985, por el publicador Epyx. Los próximos dos juegos de Lucasfilm fueron Koronis Rift y The Eidolon. Sus primeros juegos desarrollados únicamente por Lucasfilm, y un publicador distribuiría los juegos. Atari Publicó sus juegos para los sistemas Atari, Activision y Epyx lo harían para sus respectivos ordenadores. Maniac Mansion fue uno de los primeros juegos que publicó y desarrolló Lucasfilm Games. En 1990, en una reorganización de las empresas de Lucas, la división de juegos de Lucasfilm, empezó a ser parte de la recientemente creada LucasArts Entertainment Company, comenzaron con la creación de Industrial Light and Magic (ILM) y Skywalker Sound. Después ILM y Skywalker Sound serían consolidados bajo Lucas Digital y LucasArts comenzaría a ser el nombre oficial de la formada división de juegos. Adquirida por The Walt Disney Company el 30 de octubre de 2012, a través de la adquisición de la matriz Lucasfilm, el 3 de abril de 2013 fue anunciado su cierre, por lo cual muchos títulos que estaban en desarrollo fueron cancelados. ',
  descshort:'George Lucas inició su sueño de crear juegos en 1982 y lanzó clásicos como Maniac Mansion, Monkey Island y Sam & Max. ACtualmente la empresa esta en suspense',
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CC4LHfVRUyfr_fd828N7HfQZfxS7Fh9BOA&usqp=CAU',
  bigimg:'https://i0.wp.com/img.pixfans.com/2009/02/posters_lucasarts.jpg?resize=500%2C331',
},
{
  id:10,
  title:'Midway',
  desc:'Midway Manufacturing Company (Midway Empresa de Fabricación) comenzó en 1958 como una fábrica independiente de equipamiento para entretenimiento. Fue comprada por Bally en 1969. Tras algunos años creando mecánicamente juegos arcade semejantes a tirar bolos y simuladores del oeste de disparos, Midway llegó a ser en 1973 una de las primeras empresas americanas creadoras de videojuegos arcade. Durante los años 1970, Midway estuvo muy ligada a la desarrolladora japonesa de videojuegos Taito Corporation, ambas empresas muy ligadas, con autorizaciones para la fácil distribución de juegos en sus respectivos países. Midway entró en el mercado consumista en 1977 gracias a Bally Home Library Computer; el único sistema que jamás fue desarrollado por Midway. Los sucesos cruciales llegaron a Midway durante 1978, con la distribución del juego de arcade Space Invaders en América. Este fue seguido por la versión estadounidense de Namco, Pac Man (1980). Ms Pac Man (1981) le siguió, convirtiéndose en uno de los juegos arcade más aclamados. ',
  descshort:'La hoy desaparecida (pertenece a Warner) productora fue la primera en Estados Unidos desde 1958 y dejó juegos como Mortal Kombat y NBA Jam.',
  img:'https://static.wikia.nocookie.net/mortalkombat/images/0/01/Midway-games-logo.jpg/revision/latest/scale-to-width-down/200?cb=20120515165026&path-prefix=es',
  bigimg:'https://i.ytimg.com/vi/V82yx5UhavY/maxresdefault.jpg',
},
];
function Item({ title }) {
  return(
      <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
      </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{alignItems: 'center',justifyContent: 'center' , backgroundColor:'#a9a2a1',}}>
      <Text style={styles.bigTI}>Home Screen</Text>
      <FlatList 
      data={DATA} 
      renderItem={({item}) =>(<TouchableOpacity style={styles.container}
      onPress={() => {
        navigation.navigate('Details', {
          itemId: item.id,
          mas: item.title,
          desc: item.desc,
          bigimg: item.bigimg,
        });
      }}> 
    <Image style={styles.tinyLogo} source={{ uri: item.img }}  />
    <Text style={styles.itemT}>{item.title}</Text>
    <Text style={styles.itemD}>{item.descshort}</Text>
    </TouchableOpacity>
    ) }
      keyExtractor={item=>item.id} />
    </View>
  );
}


function DetailsScreen({ route, navigation }) {
  const { mas, desc, bigimg } = route.params;
  return (
    <View style={{alignContent:'center',alignItems:'center', backgroundColor:'#d3bdbd',}}>
      <Text style={styles.bigTI}>{JSON.stringify(mas)}</Text>
      <Image style={styles.bigimg} source={{ uri: bigimg }}  />
      <Text style={{alignSelf:'flex-start',fontSize:20,}}>Descripcion: </Text>
      <Text style={styles.Detaildesc}>{JSON.stringify(desc)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 322,desc:'no se paso desc' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create ({

  Detaildesc:{
    marginVertical:5,
    backgroundColor: '#d49d9d',
  },
  bigTI:{
    fontSize:25,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 15, left: 5,
    },
    bigimg: {
      width: 400,
      height: 400, 
      },
  container:{
      backgroundColor: '#cac8c8',
      marginVertical:2,
  },
  itemT:{
    fontSize:20,
      marginHorizontal:8,
      position: 'relative',
      left: 53,
      
  },
  itemD:{
    marginHorizontal:8,
    position: 'relative',
      left: 55,
    marginRight:55,
},
  title:{
      fontSize:32,
  },

    OldDetails:{ 
      flex: 1,
       alignItems: 'center',
        justifyContent: 'center' }

})