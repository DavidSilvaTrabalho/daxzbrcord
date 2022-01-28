import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals[800]};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  
  const [user, setUser] = useState("");
  const [dados, setDados] = useState([])
  const roteamento = useRouter()
 

  /*
  const getUserInformation = async function() {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')      
      const teste = new Array()
      teste.push(data)
      console.log(teste)
      setDados(teste)

      }; 
      getUserInformation() 
*/
  return (
    <>
      
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['000'],
          backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '2px 2px 10px 0 rgba(0 0 0)',
            backgroundColor: appConfig.theme.colors.primary['900'],
            overflow: 'hidden',
            filter: 'blur(5)',
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Seja Bem Vindo!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[800] }}>
              {appConfig.name}
            </Text>

            <TextField value={user}
              onChange={function handler(e){
                const userN = e.target.value
                setUser(userN)
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.primary[600],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.neutrals['charcoal'],
                  backgroundColor: appConfig.theme.colors.neutrals[999],
                },
              }}
            />
            <Button

              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[500],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary[800],
             
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >

        {<span id="text">{user}</span>}

        {
          user.length <= 2 ? <Image styleSheet={{
            borderRadius: '50%',
            marginBottom: '16px',
          }}
          src={`https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png`}
        />  : <Image styleSheet={{
            borderRadius: '50%',
            marginBottom: '16px',
          }}
          src={`https://github.com/${user}.png`}
        /> 
        }

        
        {/*dados.map((value, key) => (
          
          <ul key={key}>
            <li>{value.name}</li>
            <li>{value.following}</li>

          </ul>
          
        ))*/}
    
        
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[100],
                backgroundColor: appConfig.theme.colors.neutrals[0],
                padding: '3px 10px',
                borderRadius: '1000px',
                fontSize: "20px"
              }}
            >

           
              
            </Text>
          </Box>
          {/* Photo Area */}
          
        </Box>
      </Box>
    </>
  );
}