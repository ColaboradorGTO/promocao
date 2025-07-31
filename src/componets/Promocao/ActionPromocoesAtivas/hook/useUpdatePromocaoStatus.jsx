// import { useEffect, useState } from "react"
// import { put } from "../../../../api/funcRequest"
// import { getDataAtual, getDataTresMesesAtras } from "../../../../utils/dataAtual"
// import { useNavigate } from "react-router-dom"
// import axios from "axios";

// export const useUpdatePromocaoAtivaStatus = ({ dadosListaPromocao }) => {
//   const [dataInicio, setDataInicio] = useState("");
//   const [dataFim, setDataFim] = useState("");

//   useEffect(() => {
//     const dataInicial = getDataAtual()
//     const dataFinal = getDataAtual()
//     setDataInicio(dataInicial)
//     setDataFim(dataFinal)
//   }, [])

//   const verificarPromocaoExpirada = async () => {
//     if(!dadosListaPromocao || dadosListaPromocao.length === 0) return

//     const dataAtual = new Date();
//     const promocoesExpiradas = [];

//     dadosListaPromocao.forEach(promocao => {
//       if(promocao?.DTHORAFIM) {
//         const dataFimPromocao = new Date(promocao.DTHORAFIM);

//         if(dataFimPromocao < dataAtual && promocao.STATIVO === 'True') {
//           promocoesExpiradas.push(promocao);
//         }
//       }
//     });

//     if(promocoesExpiradas.length > 0) {

//       for(const promocao of promocoesExpiradas) {
//          try {
//           await desativarPromocao(promocao.IDRESUMOPROMOCAOMARKETING);
//         } catch (error) {
//           console.error(`Erro ao desativar promoção ${promocao.IDRESUMOPROMOCAOMARKETING}:`, error);
//         }
//       }
//     }
//   }

//   const desativarPromocao = async (idPromocao) => {
    
//     try {
//       const putData = {
//         STATIVO: 'False',
//         IDRESUMOPROMOCAOMARKETING: idPromocao,
//       };

//       const response = await put('/desativar-status-promocao', putData);

//       return response.data;
//     } catch (error) {
//       console.error('Erro ao Atualizar promoção:', error);
//       return null;
//     }
//   };

//     useEffect(() => {
//     if (dadosListaPromocao && dadosListaPromocao.length > 0) {
//       verificarPromocaoExpirada();
//     }
//   }, [dadosListaPromocao]);

//   return {
//     dataInicio,
//     setDataInicio,
//     dataFim,
//     setDataFim,
//     verificarPromocaoExpirada,
//     desativarPromocao
//   }
// }