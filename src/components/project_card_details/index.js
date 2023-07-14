import React, { useState, useEffect } from "react";
import '../project_card_details/style.css';
import {
  Col,
  Row,
  Card,
  Button,
  Image
} from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import GitLogo from '../../assets/img/git.svg';
import Card3D from "../card_3d/Card3D";

import { FlippingCard, FlippingCardFront, FlippingCardBack } from 'react-ui-cards';
import { useToasts } from 'react-toast-notifications';

const PCD = () => {
  const [setErrors] = useState(false);
  const [git, setGit] = useState([]);
  const { addToast } = useToasts();

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/DanielAbedoy/repos");
    res
      .json()
      .then(res => setGit(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Row >
      {git.map(item => (
        <Col xl={4} md="6" xs="12" key={item.id} className="mx-auto p-2 d-flex flex-column align-items-center justify-content-center" >
          <FlippingCard style={{ width: "100%", height: "280px", minHeight: "280px" }} >
            <FlippingCardBack >
              <div
                className="d-flex flex-column aling-items-center justify-content-center p-2"
                style={{
                  width: '100%',
                  height: '100%',
                  border:"solid 1.5px black"
                }}>
                <button  className="modal-exit-btn about_modal mx-auto">
                  <CopyToClipboard text={item.ssh_url}
                    onCopy={() => addToast("SSH copiado correctamente",{appearance:"success", autoDismiss:true})}>
                    <span className="h5" style={{fontFamily:"'VT323'"}}><b>Copiar SSH</b></span>
                  </CopyToClipboard>
                </button>
                <button className="modal-exit-btn about_modal mx-auto">
                  <CopyToClipboard text={item.clone_url}
                    onCopy={() =>addToast("HTTPS copiado correctamente",{appearance:"success", autoDismiss:true})}>
                    <span className="h5" style={{fontFamily:"'VT323'"}}><b>Copiar HTTPS</b></span>
                  </CopyToClipboard>
                </button>
                <button className="modal-exit-btn about_modal mx-auto">
                  <a className="h5" href={item.svn_url} style={{ textDecoration: 'none', color: 'white', fontFamily:"'VT323'" }} target="_blank" rel="noopener noreferrer"><b>Abrir</b></a>
                </button>
                <ToastsContainer store={ToastsStore} timer='10000' />

              </div>
            </FlippingCardBack>
            <FlippingCardFront style={{ boxShadow: "0px 0px 20px 0px rgba(10,133,12, 0.5)" }} >
              <div
                className="d-flex flex-column aling-items-center justify-content-center p-2"
                style={{
                  width: '100%',
                  height: '100%',
                  border:"solid 1.5px black"
                }}>
                <img className="mx-auto" src={GitLogo} width="30%" />

                <p className="h3 repoName text-center"> Nombre: {item.name} </p>
                <p className="m-0 repo-info text-center" style={{ fontFamily: "'VT323'" }}>
                  Dir: {item.full_name} <br />
                  Creado: {item.created_at} <br />
                  Actualizado: {item.updated_at}
                </p>
              </div>
            </FlippingCardFront>
          </FlippingCard>

        </Col>
      ))
      }
    </Row>
  );
};
export default PCD;
