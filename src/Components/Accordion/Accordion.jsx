import { Accordion } from "react-bootstrap";

import "./accordion.css";
const CustomAccordion = ({ item, index }) => {
  return (
    <>
      {
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{item.heading}</Accordion.Header>

          <Accordion.Body>
            <ul>
              {item.content.map((label, index) => {
                return (
                  <li key={index}>
                    {typeof label !== "object" ? (
                      <a href="#">{label}</a>
                    ) : (
                      <Accordion>
                        <Accordion.Item eventKey={label.id}>
                          <Accordion.Header>
                            {label.innerHeading}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              {label.innerData.map((data, index) => {
                                return (
                                  <li key={index}>
                                    <a href="#">{data}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      }
    </>
  );
};
export default CustomAccordion;
