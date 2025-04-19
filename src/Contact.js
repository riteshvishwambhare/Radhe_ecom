import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading"> contact page </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217.06191802799103!2d77.60733355476192!3d19.682809408291796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1743675605708!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form ">
        <form 
        action=" https://formspree.io/f/mldjpnkl "
         method="post"
          className="contact-inputs ">

          <input
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

          <textarea 
          placeholder="Enter Your Name"
          name="Message" 
          cols="30%"
          rows="10"
          required
          >
          </textarea>
          <input type="submit" value="send"/>
        </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
