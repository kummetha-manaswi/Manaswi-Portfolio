export const portfolioData = {
  personalInfo: {
    name: "Kummetha Manaswi",
    shortName: "MANASWI",
    primaryRole: "DATA ANALYST",
    secondaryAreas: ["DATA SCIENCE", "BUSINESS INTELLIGENCE", "MACHINE LEARNING"],
    statusBadge: "AVAILABLE FOR DATA ANALYST ROLES",
    headline: "Curious about the numbers.\nSerious about what they mean.",
    supportingText: "I enjoy exploring data, finding patterns, and understanding the stories hidden within it.",
    email: "manaswireddykummetha1181@gmail.com",
    phone: "9346202613",
    phoneDisplay: "+91 9346202613",
    linkedin: "https://www.linkedin.com/in/kummetha-manaswi/",
    github: "https://github.com/kummetha-manaswi",
    resumeUrl: "/assets/MANASWI_CV_DS(1).pdf",
    portraitUrl: "/assets/manaswi-portrait.jpg",
  },

  about: {
    heading: "ABOUT ME",
    statement: "I’m a Computer Science undergraduate with a strong interest in data analytics, business intelligence, and machine learning. I enjoy turning raw datasets into meaningful insights through analysis, visualization, and predictive modeling.",
    subline: "B.Tech CSE · CGPA 8.08"
  },

  skills: [
    {
      category: "Programming",
      items: ["Python", "SQL", "C++", "Java"]
    },
    {
      category: "Data Analytics",
      items: ["Pandas", "NumPy", "Data Cleaning", "Data Preprocessing", "EDA", "Statistical Analysis"]
    },
    {
      category: "BI & Visualization",
      items: ["Power BI", "Excel", "DAX", "Power Query", "Matplotlib", "Seaborn"]
    },
    {
      category: "Machine Learning",
      items: ["Scikit-learn", "Feature Analysis", "Model Evaluation"]
    },
    {
      category: "Data Engineering",
      items: ["ETL Pipelines", "Data Transformation", "Data Modeling", "Star Schema", "Snowflake Schema"]
    },
    {
      category: "Tools",
      items: ["Jupyter Notebook", "Git", "GitHub", "Spyder", "LeetCode"]
    }
  ],

  education: [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech — Computer Science & Engineering",
      period: "Aug 2024 – Present",
      grade: "CGPA: 8.08"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      period: "2022 – 2024",
      grade: "94.9%"
    },
    {
      institution: "Sri Chaitanya Techno School",
      degree: "Matriculation",
      period: "2022",
      grade: "92.6%"
    }
  ],

  certifications: [
    {
      id: "oracle-ai",
      title: "Oracle AI Database Certified Foundations Associate",
      issuer: "Oracle",
      date: "July 2026",
      previewImage: "/assets/certificates/oracle-ai-database.png",
      pdfUrl: "/assets/certificates/oracle-ai-database.pdf"
    },
    {
      id: "infosys-dbms",
      title: "Database Management System Part-1",
      issuer: "Infosys Springboard",
      date: "July 2026",
      previewImage: "/assets/certificates/infosys-dbms.png",
      pdfUrl: "/assets/certificates/infosys-dbms.pdf"
    },
    {
      id: "ibm-python",
      title: "Python 101 for Data Science",
      issuer: "IBM",
      date: "September 2025",
      previewImage: "/assets/certificates/ibm-python.png",
      pdfUrl: "/assets/certificates/ibm-python.pdf"
    },
    {
      id: "tcs-ion",
      title: "TCS ION Career Edge – Young Professional",
      issuer: "TCS",
      date: "September 2025",
      previewImage: "/assets/certificates/tcs-ion.png",
      pdfUrl: "/assets/certificates/tcs-ion.pdf"
    }
  ],

  projects: [
    {
      number: "01",
      id: "ai-fraud-guard",
      title: "AI FRAUD GUARD",
      subtitle: "AI-Powered Credit Card Fraud Detection",
      description: "An end-to-end data science and machine learning application for analyzing credit card transactions, estimating fraud risk, explaining model decisions, and presenting insights through an interactive application.",
      metrics: [
        { label: "Precision", value: "93.24%" },
        { label: "Recall", value: "72.63%" },
        { label: "F1 Score", value: "81.66%" },
        { label: "ROC-AUC", value: "97.68%" }
      ],
      workflow: ["DATA", "ANALYSIS", "ML", "EXPLAINABILITY", "API", "APPLICATION"],
      workPoints: [
        "Engineered end-to-end fraud detection architecture with calibrated classification thresholds to optimize precision and recall.",
        "Integrated SHAP to provide interpretable feature attributions for transparent decision explanations.",
        "Built interactive FinTech-style interface connected to FastAPI prediction service for live scenario testing."
      ],
      tools: "Python · SQL · Machine Learning",
      supportingSkills: "SHAP · FastAPI · Streamlit",
      github: "https://github.com/kummetha-manaswi/credit-card-fraud-detection",
      liveDemo: "https://ai-fraud-guard.streamlit.app/",
      gallery: [
        {
          id: "fg-1",
          title: "Transaction Risk Checker (Primary)",
          subtitle: "Risk scoring simulator with transaction inputs and decision output",
          src: "/assets/fraud-guard/risk-checker.png"
        },
        {
          id: "fg-2",
          title: "Fraud Intelligence",
          subtitle: "Aggregate anomaly detection and multidimensional trend monitoring",
          src: "/assets/fraud-guard/fraud-intelligence.png"
        },
        {
          id: "fg-3",
          title: "AI Model Performance",
          subtitle: "Precision-recall curves, confusion matrices, and ROC-AUC evaluation",
          src: "/assets/fraud-guard/ai-model.png"
        },
        {
          id: "fg-4",
          title: "Explainable AI (SHAP)",
          subtitle: "SHAP feature importance and individual prediction attribution waterfalls",
          src: "/assets/fraud-guard/explainable-ai.png"
        }
      ]
    },
    {
      number: "02",
      id: "nyc-collision-analysis",
      title: "NYC VEHICLE COLLISION ANALYSIS & SEVERITY PREDICTION",
      subtitle: "Exploratory Data Analysis · Machine Learning · Power BI",
      description: "Analyzed NYC vehicle collision data to identify patterns, risk factors, and severity trends, combining exploratory analysis, statistical analysis, machine learning, and an interactive Power BI dashboard.",
      findings: [
        "Brooklyn had the highest collision count.",
        "Accidents peaked between 4 PM and 7 PM.",
        "Driver inattention was identified as a major contributing factor.",
        "Gradient Boosting achieved 69.71% accuracy."
      ],
      dashboardPages: [
        "Overall Trends",
        "Time-Based Accident Analysis",
        "Victim Impact Analysis",
        "Root Cause Analysis"
      ],
      workPoints: [
        "Conducted exploratory data analysis and statistical preprocessing on urban collision records.",
        "Trained Gradient Boosting models to evaluate collision injury severity risk factors.",
        "Designed an interactive 4-page Power BI dashboard suite with dynamic DAX filtering and drill-downs."
      ],
      tools: "Python · Power BI · Machine Learning",
      supportingSkills: "DAX · Data Modeling · Power Query · Statistical Analysis",
      github: "https://github.com/kummetha-manaswi/data-driven-nyc-collision-analysis",
      powerBiRepo: "https://github.com/kummetha-manaswi/nyc-collision-insights-dashboard",
      gallery: [
        {
          id: "nyc-1",
          title: "Overall Trends (Main)",
          subtitle: "Executive overview with borough safety scores, accident trajectories, and vehicle types",
          src: "/assets/nyc-collision/dashboard_overview.png"
        },
        {
          id: "nyc-2",
          title: "Time-Based Accident Analysis",
          subtitle: "Hourly and day-of-week collision peaks identifying the 4 PM – 7 PM risk window",
          src: "/assets/nyc-collision/time_based_analysis.png"
        },
        {
          id: "nyc-3",
          title: "Victim Impact Analysis",
          subtitle: "Fatality and injury dispersion across pedestrians, cyclists, and motorists",
          src: "/assets/nyc-collision/victim_impact_analysis.png"
        },
        {
          id: "nyc-4",
          title: "Root Cause Analysis",
          subtitle: "Statistical ranking of contributing factors including driver inattention",
          src: "/assets/nyc-collision/root_cause_analysis.png"
        }
      ]
    },
    {
      number: "03",
      id: "stroke-data-analysis",
      title: "STROKE DATA ANALYSIS DASHBOARD",
      subtitle: "Power BI · Data Analytics",
      description: "An interactive Power BI dashboard designed to analyze state-level stroke measurements, population patterns, prevalence types, and confidence intervals.",
      dashboardPages: [
        "Executive Overview",
        "Risk & Confidence Analysis",
        "Population vs Stroke Analysis",
        "Key Insights & Recommendations"
      ],
      workPoints: [
        "Modeled state-level stroke measurements, population distribution, and confidence interval metrics in Power BI.",
        "Implemented DAX measures comparing age-adjusted versus crude prevalence rates across geographic regions.",
        "Constructed analytical views enabling drill-down across population patterns and confidence ranges."
      ],
      tools: "Power BI · Data Analytics",
      supportingSkills: "DAX · Data Modeling · Statistical Analysis",
      github: "https://github.com/Rajasekhar-odeti/stroke-data-analysis",
      gallery: [
        {
          id: "st-1",
          title: "Executive Overview (Main)",
          subtitle: "State-level stroke rate KPI cards, national geographic map, and data type distribution",
          src: "/assets/stroke-analysis/executive-overview.png"
        },
        {
          id: "st-2",
          title: "Risk & Confidence Analysis",
          subtitle: "High vs Low confidence intervals and stroke rate versus confidence range by state",
          src: "/assets/stroke-analysis/risk-confidence-analysis.png"
        },
        {
          id: "st-3",
          title: "Population vs Stroke Analysis",
          subtitle: "State population comparisons, crude vs age-adjusted distributions, and data category views",
          src: "/assets/stroke-analysis/population-stroke-analysis.png"
        },
        {
          id: "st-4",
          title: "Key Insights & Recommendations",
          subtitle: "Multi-year trend analysis, national summary metrics, and public health observations",
          src: "/assets/stroke-analysis/key-insights-recommendations.png"
        }
      ]
    }
  ],

  achievements: [
    {
      title: "SMART INDIA HACKATHON 2026",
      subtitle: "Pre-Finalist",
      description: "Advanced through internal campus selection among 950+ teams."
    },
    {
      title: "OUTSTANDING GRADE (A)",
      subtitle: "AI-Driven Full-Stack Development Summer Training Program",
      description: "Lovely Professional University"
    },
    {
      title: "CERTIFIED VOLUNTEER",
      subtitle: "Community Outreach",
      description: "Cybersecurity awareness training for 100+ students and senior citizens."
    }
  ],

  contact: {
    heading: "LET'S CONNECT.",
    text: "Interested in data, analytics, or building something meaningful with technology? I'd be happy to connect.",
    email: "manaswireddykummetha1181@gmail.com",
    phone: "9346202613",
    phoneDisplay: "+91 9346202613",
    linkedin: "https://www.linkedin.com/in/kummetha-manaswi/",
    github: "https://github.com/kummetha-manaswi",
    cta: "GET IN TOUCH ↗"
  }
};
