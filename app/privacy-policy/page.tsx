import Link from 'next/link';

const Privacy = () => {
  return (
    <section className='w-full md:w-1/2 mx-auto py-20 px-3'>
      <h2 className='text-center text-2xl font-semibold'>Privacy Policy</h2>
      <p className='text-center text-gray-600 pb-5 text-sm'>
        Last updated: 25 Sep 2023
      </p>

      <p className='pb-4'>
        SmartBrandly (interchangeably referred to as "Smart Brandly") operates
        the SmartBrandly website (hereinafter referred to as the "Service").
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data.
      </p>

      <p className='pb-4'>
        We value your privacy and are committed to protecting your personal
        information. Please read this Privacy Policy carefully to understand how
        we handle your data.
      </p>

      <h3 className='text-lg font-semibold mb-2'>
        1. Information Collection and Use
      </h3>
      <p className='pb-4'>
        We do not collect any personal information from our users, except for
        the information required for the use of our Service. Any information
        provided by users is used solely for the purpose of generating domain
        names and is not shared with any third parties.
      </p>

      <h3 className='text-lg font-semibold mb-2'>2. Data Storage</h3>
      <p className='pb-4'>
        Data provided by users for the generation of domain names is stored
        temporarily for processing and is not retained after the session is
        completed.
      </p>

      <h3 className='text-lg font-semibold mb-2'>3. Use of Data</h3>
      <p className='pb-4'>
        SmartBrandly uses the collected data for the sole purpose of providing
        and improving our Service. We do not use or share user data for any
        other purposes.
      </p>

      <h3 className='text-lg font-semibold mb-2'>4. Data Security</h3>
      <p className='pb-4'>
        The security of your data is important to us. We take reasonable
        measures to protect user data; however, please be aware that no method
        of data transmission over the Internet is completely secure, and we
        cannot guarantee the absolute security of your data.
      </p>

      <h3 className='text-lg font-semibold mb-2'>5. Third-Party Services</h3>
      <p className='pb-4'>
        Our Service may contain links to third-party websites or services that
        are not operated by us. We have no control over and assume no
        responsibility for the content, privacy policies, or practices of these
        third-party sites or services. We recommend reviewing the privacy
        policies of any third-party sites you visit.
      </p>
      <h3 className='text-lg font-semibold mt-6 mb-2'>
        6. What SmartBrandly is Not Trained to Do:
      </h3>
      <ul className='list-disc pl-6'>
        <li>Engage in explicit sexual content or discussions.</li>
        <li>Provide or promote illegal content, activities, or advice.</li>
        <li>
          Generate or encourage hate speech, discrimination, or harassment.
        </li>
        <li>
          Offer medical, legal, or financial advice, as SmartBrandly is not a
          licensed professional.
        </li>
        <li>
          Assist with or promote self-harm, suicide, or any harmful activities.
        </li>
        <li>
          Create or share personal information, such as addresses, phone
          numbers, or social security numbers.
        </li>
        <li>Generate misleading or false information with harmful intent.</li>
        <li>
          Engage in violent or harmful discussions or promote harm to others.
        </li>
      </ul>

      <h3 className='text-lg font-semibold mb-2'>
        7. Changes to This Privacy Policy
      </h3>
      <p className='pb-4'>
        We may update our Privacy Policy from time to time to reflect changes in
        our practices and the law. We will notify users of any significant
        changes by posting the revised Privacy Policy on our website.
      </p>

      <p className='pb-4'>
        Users are encouraged to review this Privacy Policy periodically for any
        updates. Changes to this Privacy Policy are effective when posted on
        this page.
      </p>

      <h3 className='text-lg font-semibold mb-2'>8. Contact Us</h3>
      <p className='pb-4'>
        If you have any questions about this Privacy Policy, please{' '}
        <Link href='/contact' className='underline text-purple-950'>
          contact us
        </Link>{' '}
        <span>
          or by visiting this page on our website:{' '}
          <a
            className='underline text-purple-950'
            href='https://www.smartbrandly.com/contact'
          >
            https://www.smartbrandly.com/contact
          </a>
        </span>
      </p>
    </section>
  );
};

export default Privacy;
