import React from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';

const projects = [
  {
    category: 'DESIGN',
    title: 'A thoughtful brand',
    description:
      'A fresh visual identity that helps a growing business stand out and connect with its community.',
    color: '#e9e1ff',
    accent: '#6e55c7',
    icon: '✳',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Made for the web',
    description:
      'A fast, accessible website built to make everyday tasks feel easy on every screen.',
    color: '#d9f4e9',
    accent: '#16805a',
    icon: '</>',
  },
  {
    category: 'STRATEGY',
    title: 'A clearer next step',
    description:
      'A practical plan to turn big ideas into focused work and measurable progress.',
    color: '#ffebd6',
    accent: '#bd6c24',
    icon: '↗',
  },
];

function App() {
  return (
    <>
      <div className="App" style={{ minHeight: '100vh', background: '#f7f8fc' }}>
        <Navbar
          expand="lg"
          variant="dark"
          style={{ backgroundColor: '#17243b' }}
          className="py-3"
        >
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">
              little<span style={{ color: '#b8a4ff' }}>studio</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto align-items-lg-center gap-lg-3">
                <Nav.Link href="#work">Our work</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Button
                  as="a"
                  href="mailto:hello@littlestudio.example"
                  variant="light"
                  size="sm"
                  className="rounded-pill px-3 mt-2 mt-lg-0"
                >
                  Say hello
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Container id="home" className="py-5">
            <section className="text-center py-5">
              <Badge
                pill
                bg="white"
                text="dark"
                className="border px-3 py-2 mb-4"
              >
                INDEPENDENT CREATIVE STUDIO
              </Badge>
              <h1
                className="display-4 fw-bold mx-auto mb-3"
                style={{ maxWidth: '700px', color: '#17243b' }}
              >
                Good ideas, made <span style={{ color: '#7259c8' }}>real.</span>
              </h1>
              <p
                className="lead text-secondary mx-auto mb-0"
                style={{ maxWidth: '560px' }}
              >
                We bring design, technology, and a little curiosity together
                to make useful things for people.
              </p>
            </section>

            <section id="work" className="pb-5">
              <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
                <div>
                  <p className="text-uppercase fw-semibold small mb-2" style={{ color: '#7259c8' }}>
                    A few good things
                  </p>
                  <h2 className="h3 fw-bold mb-0" style={{ color: '#17243b' }}>
                    What we do
                  </h2>
                </div>
                <a className="text-decoration-none fw-semibold" href="#about">
                  Get to know us <span aria-hidden="true">→</span>
                </a>
              </div>

              <Row className="g-4">
                {projects.map((project) => (
                  <Col key={project.title} md={6} lg={4}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body className="p-4 p-lg-5">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                          style={{
                            height: '150px',
                            backgroundColor: project.color,
                            color: project.accent,
                            fontSize: '3rem',
                            fontWeight: 700,
                          }}
                          aria-hidden="true"
                        >
                          {project.icon}
                        </div>
                        <Badge
                          pill
                          className="mb-3"
                          style={{
                            backgroundColor: project.color,
                            color: project.accent,
                          }}
                        >
                          {project.category}
                        </Badge>
                        <Card.Title className="h4 fw-bold" style={{ color: '#17243b' }}>
                          {project.title}
                        </Card.Title>
                        <Card.Text className="text-secondary mb-0">
                          {project.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>

            <section
              id="about"
              className="text-center py-5 px-4 rounded-4 mb-4"
              style={{ backgroundColor: '#ede9fb' }}
            >
              <h2 className="h3 fw-bold mb-2" style={{ color: '#17243b' }}>
                Have a good idea?
              </h2>
              <p className="text-secondary mb-4">
                We’d love to hear what you’re dreaming up.
              </p>
              <Button
                as="a"
                href="mailto:hello@littlestudio.example"
                variant="dark"
                className="rounded-pill px-4"
              >
                Let’s talk
              </Button>
            </section>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
