export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "$0/month",
      description: "Our starter plan.",
      features: [
        "Access to v3.5",
        "50 credits renew daily (10 songs)",
        "No commercial use",
        "Standard features only",
        "Upload up to 1 min of audio",
        "Shared creation queue",
        "No add-on credit purchases"
      ]
    },
    {
      name: "Pro Plan",
      price: "$8/month",
      description: "Most Popular - Access to our best models and editing tools.",
      popular: true,
      yearlyPrice: "Saves $24 by billing yearly!",
      features: [
        "Access to latest and most advanced v4.5+ model",
        "2,500 credits (up to 500 songs), refreshes monthly",
        "Commercial use rights for songs made while subscribed",
        "Standard + Pro features (personas and advanced editing)",
        "Split songs into up to 12 vocal and instrument stems",
        "Upload up to 8 min of audio",
        "Add new vocals or instrumentals to existing songs",
        "Early access to new features",
        "Ability to purchase add-on credits",
        "Priority queue, up to 10 songs at once"
      ]
    },
    {
      name: "Premier Plan",
      price: "$24/month",
      description: "Best Value - Maximum credits and every feature unlocked.",
      yearlyPrice: "Saves $72 by billing yearly!",
      features: [
        "Access to latest and most advanced v4.5+ model",
        "10,000 credits (up to 2,000 songs), refreshes monthly",
        "Commercial use rights for songs made while subscribed",
        "Standard + Pro features (personas and advanced editing)",
        "Split songs into up to 12 vocal and instrument stems",
        "Upload up to 8 min of audio",
        "Add new vocals or instrumentals to existing songs",
        "Early access to new features",
        "Ability to purchase add-on credits",
        "Priority queue, up to 10 songs at once"
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px', 
            marginBottom: '40px' 
          }}>
            <button style={{ 
              backgroundColor: 'var(--accent-color)', 
              padding: '8px 16px', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Monthly
            </button>
            <button style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '8px 16px', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Yearly save 20%
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'featured' : ''}`}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Most Popular
                </div>
              )}
              
              <div className="pricing-title">{plan.name}</div>
              <div className="pricing-price">{plan.price}</div>
              
              {plan.yearlyPrice && (
                <div style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '14px', 
                  marginBottom: '16px' 
                }}>
                  {plan.yearlyPrice}
                </div>
              )}
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '24px',
                fontSize: '14px'
              }}>
                {plan.description}
              </p>
              
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ fontSize: '14px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button style={{ 
                width: '100%',
                backgroundColor: plan.popular ? 'var(--accent-color)' : 'transparent',
                border: plan.popular ? 'none' : '1px solid var(--border-color)',
                color: plan.popular ? 'white' : 'var(--text-color)'
              }}>
                {plan.name === 'Free Plan' ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>

        {/* Duplicate Free Plan at bottom */}
        <div style={{ marginTop: '40px' }}>
          <div className="pricing-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="pricing-title">Free Plan</div>
            <div className="pricing-price">$0/month</div>
            <p style={{ 
              color: 'var(--text-secondary)', 
              marginBottom: '24px',
              fontSize: '14px'
            }}>
              Our starter plan.
            </p>
            <ul className="pricing-features">
              <li style={{ fontSize: '14px' }}>Access to v3.5</li>
              <li style={{ fontSize: '14px' }}>50 credits renew daily (10 songs)</li>
              <li style={{ fontSize: '14px' }}>No commercial use</li>
              <li style={{ fontSize: '14px' }}>Standard features only</li>
              <li style={{ fontSize: '14px' }}>Upload up to 1 min of audio</li>
              <li style={{ fontSize: '14px' }}>Shared creation queue</li>
              <li style={{ fontSize: '14px' }}>No add-on credit purchases</li>
            </ul>
            <button style={{ 
              width: '100%',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-color)',
              color: 'var(--text-color)'
            }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
