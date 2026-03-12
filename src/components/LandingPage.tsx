import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Chip,
  Paper,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const whatWeHeard = [
  { title: '18-36 Months Is Too Long', description: 'Traditional procurement cycles take years before any working software is delivered.' },
  { title: 'VUCA Environment', description: 'Volatility, Uncertainty, Complexity, Ambiguity — the world changes faster than plans.' },
  { title: 'The Cake Model', description: 'Software is just one ingredient. Value comes from slices that cut through all layers.' },
  { title: 'The Bake-Off', description: 'Let multiple vendors compete by actually delivering, then decide based on results.' },
  { title: 'Do The Opposite', description: 'Take the traditional approach. Ask: what\'s the exact opposite? Do that.' },
  { title: '$16B Question', description: 'Are states getting value from Medicaid IT spending? Most say no.' },
];

const priorArt = [
  { name: 'Alaska EIS (2017)', what: 'GitHub-based procurement for Medicaid systems', outcome: 'Projects stalled, but approach validated', link: 'https://github.com/akhealth/EIS-Modernization' },
  { name: '18F Agile BPA (2015)', what: 'Vendors submitted working prototypes, not proposals', outcome: '17 vendors awarded based on code quality', link: 'https://blog.18f.org/2015/08/28/announcing-the-agile-BPA-awards/' },
  { name: 'California ADPQ (2016)', what: 'Pre-qualified vendor pool via prototype challenge', outcome: '11 vendors qualified for modular procurements', link: 'https://ca-cwds.github.io/procurements/' },
  { name: 'UK GDS', what: 'Agile spending approval up to £750K without business case', outcome: 'World leader in digital government', link: 'https://www.gov.uk/service-manual' },
  { name: 'SI Delivery Templates', what: 'Challenge-based RFP framework with rolling submissions', outcome: 'Value = Outcomes ÷ Cost', link: 'https://si-delivery.com/starter-kit/' },
];

const vendorSolutions = [
  { name: 'Alpha', approach: 'Rules-Based Engine', tech: 'HTML/JS', description: 'Simple, deterministic, auditable', color: '#E3F2FD', url: 'https://mes-bakeoff-demo.github.io/msp-solution-alpha' },
  { name: 'Beta', approach: 'Decision Tree', tech: 'React', description: 'Visual and interactive', color: '#E8F5E9', url: 'https://mes-bakeoff-demo.github.io/msp-solution-beta' },
  { name: 'Gamma', approach: 'Form Wizard', tech: 'Vue', description: 'Guided step-by-step', color: '#FFF3E0', url: 'https://mes-bakeoff-demo.github.io/msp-solution-gamma' },
];


export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>MES Bake-Off Demo</Typography>
          <Chip label="Unofficial" size="small" sx={{ mr: 2, bgcolor: 'secondary.main', color: 'primary.main', fontWeight: 'bold' }} />
          <Button color="inherit" startIcon={<GitHubIcon />} href="https://github.com/mes-bakeoff-demo" target="_blank">GitHub</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Chip label="Independent Demo — Not an Official Government Project" size="small" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.15)', color: 'white' }} />
          <Typography variant="overline" sx={{ opacity: 0.7, letterSpacing: 2, display: 'block' }}>Inspired by HIT Connect 2026</Typography>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" sx={{ mt: 1 }}>What If We Actually Did It?</Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>6 repos. 3 working prototypes. 12 backlog items. Built in 2 hours.</Typography>
          <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 500, mx: 'auto' }}>Minnesota presented a vision for challenge-based procurement. This demo explores what that could look like — by actually building it.</Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary">Part 1</Typography>
          <Typography variant="h4" gutterBottom>What We Heard</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>Key concepts from Minnesota's presentation.</Typography>
          <Grid container spacing={2}>
            {whatWeHeard.map((item, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Paper sx={{ p: 2.5, height: '100%', borderLeft: '3px solid', borderColor: 'primary.main' }} elevation={0}>
                  <Typography variant="subtitle1" fontWeight="600" gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ p: 3, mt: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="body1" textAlign="center">"Move decision-making about services and software to <strong>after</strong> seeing them working in context, instead of spending time deciding <strong>before</strong>."</Typography>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="secondary.main">Part 2</Typography>
          <Typography variant="h4" gutterBottom>What We Found</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>Others have tried similar approaches.</Typography>
          <Grid container spacing={3}>
            {priorArt.map((item, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Card sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200' }} elevation={0}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="600" color="primary" gutterBottom>{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.what}</Typography>
                    <Chip label={item.outcome} size="small" sx={{ mb: 2, bgcolor: 'secondary.main', color: 'white' }} />
                    <Box><Link href={item.link} target="_blank" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.875rem' }}>Source <OpenInNewIcon sx={{ fontSize: 14 }} /></Link></Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ p: 3, mt: 4, bgcolor: 'grey.900', color: 'white' }}>
            <Typography variant="body1" textAlign="center">The pattern: <strong>show, don't tell</strong>. Evaluate vendors on working software, not proposals.</Typography>
          </Paper>
        </Container>
      </Box>


      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ opacity: 0.7 }}>Part 3</Typography>
          <Typography variant="h4" gutterBottom>What We Built</Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 2, maxWidth: 600 }}>A GitHub Organization demonstrating the bake-off model. Issues become the backlog. Vendors compete on working software.</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" size="small" startIcon={<GitHubIcon />} href="https://github.com/mes-bakeoff-demo" target="_blank">View Org</Button>
            <Button variant="outlined" size="small" href="https://github.com/mes-bakeoff-demo/mes-modernization/issues" target="_blank" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>View Backlog</Button>
          </Box>
          <Grid container spacing={3}>
            {vendorSolutions.map((vendor, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Card sx={{ height: '100%', bgcolor: vendor.color }}>
                  <CardContent>
                    <Typography variant="overline" color="text.secondary">Vendor {vendor.name}</Typography>
                    <Typography variant="h6" gutterBottom>{vendor.approach}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{vendor.description}</Typography>
                    <Chip label={vendor.tech} size="small" variant="outlined" sx={{ mb: 2 }} />
                    <Box><Button variant="contained" size="small" startIcon={<PlayArrowIcon />} href={vendor.url} target="_blank" sx={{ bgcolor: 'primary.main' }}>Try It</Button></Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>The Point</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>This demo — GitHub org, three prototypes, this site — was built in 2 hours. Hour one during the conference, hour two to deploy everything you see here. If that's possible, imagine what vendors could build in a week with real requirements.</Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            {[{ label: 'Repos', value: '6' }, { label: 'Prototypes', value: '3' }, { label: 'Proposal Pages', value: '0' }].map((stat, i) => (
              <Grid size={{ xs: 4, sm: 3 }} key={i}>
                <Paper sx={{ p: 2, bgcolor: 'grey.100' }} elevation={0}>
                  <Typography variant="h3" color="primary" fontWeight="bold">{stat.value}</Typography>
                  <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Button variant="outlined" size="large" startIcon={<GitHubIcon />} href="https://github.com/mes-bakeoff-demo" target="_blank">Explore the Demo</Button>
        </Container>
      </Box>

      <Box sx={{ py: 5, bgcolor: 'grey.100' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" color="text.secondary">How It Was Built</Typography>
          <Typography variant="h5" gutterBottom>Built Entirely with Kiro</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            This entire demo — the landing site, three vendor prototypes, GitHub organization, 12 backlog items, and all deployments — was built using <Link href="https://kiro.dev" target="_blank" sx={{ color: 'primary.main' }}>Kiro</Link>, an agentic IDE from AWS. Two hours of conversation, zero context switching.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
            Kiro handled the code generation, file management, git operations, GitHub CLI commands, and deployments — all from natural language prompts.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>Demo by Nick Aretakis</Typography>
          <Typography variant="caption" display="block" sx={{ opacity: 0.6, mb: 2 }}>Inspired by Minnesota DHS's presentation at HIT Connect 2026. Built with Kiro. Not an official government project.</Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://github.com/mes-bakeoff-demo" target="_blank" sx={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>GitHub</Link>
            <Link href="https://kiro.dev" target="_blank" sx={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>Kiro</Link>
            <Link href="https://github.com/akhealth/EIS-Modernization" target="_blank" sx={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>Alaska's Work</Link>
            <Link href="https://si-delivery.com/starter-kit/" target="_blank" sx={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>SI Delivery</Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
