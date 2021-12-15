export const organizationLabels = {
  common: {
    effectiveDate: 'Effective Date',
    expiryDate: 'Expiry Date',
    status: 'Status',
    province: 'Province',
    country: 'Country',
    select: 'Select'
  },
  organization: {
    labels: {
      code: 'Organization Code',
      organizationName: 'Organization Name',
      organizationNameInFrench: 'Organization Name In French',
      status: 'Organization Status',
      category: 'Distributor Category',
      orgStatusPlaceHolder: 'Organization Status',
      level: 'Level',
      errors: {
        organizationCodeGt: 'organizationCodeGt',
        organizationCodeRequired: 'organizationCodeRequired',
        organizationNameGt: 'organizationNameGt',
        organizationNameInFrenchGt: 'organizationNameInFrenchGt',
        organizationNameRequired: 'organizationNameRequired',
        organizationStatusRequired: 'organizationStatusRequired',
        organizationLevelRequired: 'organizationLevelRequired',
        distributorCategoryRequired: 'distributorCategoryRequired',
        maxOrganizationCodeLen: 15,
        maxOrganizationNameLen: 150
      },
      orgStatusOptions: [
        {
          label: 'ACTIVE',
          value: 'ACTIVE'
        },
        {
          label: 'INACTIVE',
          value: 'INACTIVE'
        },
        {
          label: 'CLOSED',
          value: 'CLOSED'
        },
        {
          label: 'PROSPECT',
          value: 'PROSPECT'
        },
        {
          label: 'SUSPENDED',
          value: 'SUSPENDED'
        }
      ],
      distributorCategoryOptions: [
        {
          label: 'MLI Broker',
          value: 'MLI_BROKER'
        },
        {
          label: 'AFFINITY_BROKER',
          value: 'AFFINITY_BROKER'
        },
        {
          label: 'TRAVEL_ONLY_BROKER',
          value: 'TRAVEL_ONLY_BROKER'
        },
        {
          label: 'RETAIL_TRAVEL',
          value: 'RETAIL_TRAVEL'
        },
        {
          label: 'DIRECT_CONSUMER',
          value: 'DIRECT_CONSUMER'
        },
        {
          label: 'ASSOCIATION',
          value: 'ASSOCIATION'
        }
      ]
    }
  },
  licence: {
    labels: {
      orgLicence: 'Organization Licence',
      licenseNumber: 'Licence Number',
      licenseRegistrationNumber: 'Licence / Registration Number',
      licenseType: 'Licence Type',
      province: 'Province',
      agentName: 'Agent Name',
      agentID: 'Agent ID',
      add: 'Add Licence',
      effectiveDate: 'Effective Data',
      // added by Gelo
      expiryDate: 'Expiry Date',
      status:'Status',
      licenceOptions: [
        {
          label: 'AGENCY',
          value: 'AGENCY'
        },
        {
          label: 'AGENT',
          value: 'AGENT'
        },
      ],
      statusOptions: [
        {
          label:'ACTIVE',
          value:'ACTIVE'
        },
        {
          label:'IN PROGRESS',
          value:'IN_PROGRESS'
        },
        {
          label:'PENDING',
          value:'PENDING'
        },
        {
          label:'INACTIVE',
          value:'INACTIVE'
        }
      ],
      provinceOptions: [
        {
          label:'ON',
          value:'ON'
        },{
          label:'AB',
          value:'AB'
        },{
          label:'MB',
          value:'MB'
        },{
          label:'NL',
          value:'NL'
        },{
          label:'NU',
          value:'NU'
        },{
          label:'QC',
          value:'QC'
        },{
          label:'SK',
          value:'SK'
        },{
          label:'YT',
          value:'YT'
        },{
          label:'PE',
          value:'PE'
        },{
          label:'NT',
          value:'NT'
        },{
          label:'BC',
          value:'BC'
        },{
          label:'NB',
          value:'NB'
        },{
          label:'NS',
          value:'NS'
        }
      ]
    },
  },
  organizationContact: {
    labels: {
      orgContact: 'Organization Contact',
      primaryAddress: 'Primary Address',
      addressText: 'Other Address',
      addressLine1: 'Address Line 1',
      addressLine2: 'Address Line 2',
      postalCode: 'Postal Code',
      city: 'City',
      addressType: 'AddressType',
      isMainAddress: 'Main Address',
      provincePlaceHolder: 'Province',
      primaryContact: 'Primary Contact',
      contactText: 'Other Contact',
      contactName: 'Contact Name',
      contactType: 'Contact Type',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number',
      extension: 'Extension',
      phoneType: 'Phone Type',
      emailType: 'Email Type',
      websiteText: 'Website',
      websiteURL: 'Website URL',
      hoursOfOperations: 'Hours of Operations (English)',
      hoursOfOperationsFr: 'Hours of Operations (French)',
      addAddress: 'Add Address',
      removeAddress: 'Remove Address',
      addContact: 'Add Contact',
      removeContact: 'Remove Contact',
      addWebsiteURL: 'Add Website',
      removeWebsiteURL: 'Remove Website',
      errors: {
        addressLine1Gt: 'Max allowed characters for Address Line 1 is 150',
        addressLine2Gt: 'Max allowed characters for Address Line 2 is 150',
        cityRequired: 'City is required',
        provinceRequired: 'Province is required',
        countryRequired: 'Country is required',
        isMainAddressRequired: 'Main Address is required',
        contactNameGt: 'Max allowed characters for Contact Name is 150',
        validEmailAddressRequired: 'Valid Email Address is required',
        contactTypeRequired: 'Contact Type is required',
        emailTypeRequired: 'Email Type is required',
        validPhoneNumberRequired: 'Valid Phone Number is required',
        validWebsiteURLRequired: 'Valid Website is required',
        validExtensionRequired: 'Valid Extension is required',
        phoneTypeRequired: 'Phone Type is required',
        phoneNumberGt: 'Max allowed characters for Phone Number is 10',
        extensionGt: 'Max allowed characters for Extensio is 10',
        maxAddressLineLen: 150,
        maxContactNameLen: 150,
        maxPhoneAndExtensionNumLen: 10
      },
      phoneTypeOptions: [
        {
          label: 'OFFICE',
          value: 'OFFICE'
        },
        {
          label: 'MOBILE',
          value: 'MOBILE'
        },
        {
          label: 'TOLL_FREE',
          value: 'TOLL_FREE'
        }
      ],
      addressTypeOptions: [
        {
          label: 'Office 1',
          value: 'Office 1'
        },
        {
          label: 'Office 2',
          value: 'Office 2'
        },
        {
          label: 'Alternate',
          value: 'Alternate'
        }
      ],
      yesNoOptions: [
        {
          label: 'Yes',
          value: 'Yes'
        },
        {
          label: 'No',
          value: 'No'
        }
      ],
      contactTypeOptions: [
        {
          label: 'ADMIN',
          value: 'ADMIN'
        },
        {
          label: 'OWNER',
          value: 'OWNER'
        },
        {
          label: 'CONFIRMATION_COPY',
          value: 'CONFIRMATION_COPY'
        },
        {
          label: 'MANAGER',
          value: 'MANAGER'
        },
        {
          label: 'IT',
          value: 'IT'
        },
        {
          label: 'LICENSING',
          value: 'LICENSING'
        },
        {
          label: 'COMMUNICATION',
          value: 'COMMUNICATION'
        }
      ],
      emailTypeOptions: [
        {
          label: 'ADMIN',
          value: 'ADMIN'
        },
        {
          label: 'OWNER',
          value: 'OWNER'
        },
        {
          label: 'CONFIRMATION_COPY',
          value: 'CONFIRMATION_COPY'
        },
        {
          label: 'MANAGER',
          value: 'MANAGER'
        },
        {
          label: 'IT',
          value: 'IT'
        },
        {
          label: 'LICENSING',
          value: 'LICENSING'
        },
        {
          label: 'COMMUNICATION',
          value: 'COMMUNICATION'
        },
        {
          label: 'GENERAL_INQUIRY',
          value: 'GENERAL_INQUIRY'
        }
      ]
    }
  },
  organizationContract: {
    labels: {
      orgContract: 'Organization Contract',
      addContract: 'Add Contract',
      parentOrg: 'Parent Organization',
      sponsorCode: 'Sponsor Code',
      parentOrganizationCode: 'Parent',
      policyPrefix: 'Policy Prefix',
      legalName: 'Legal Name',
      exclusiveContract: 'Exclusive',
      companyWebsite: 'Company Website',
      engagementLevel: 'Engagement Level',
      region: 'Region',
      clientType: 'Client Type',
      ncm: 'NCM',
      bdm: 'BDM',
      ssr: 'SSR',
      contentRoot: 'Content Root',
      whiteLabelRoot: 'White Label Root',
      errors: {
        policyPrefixGt: 'Max allowed characters for Policy Prefix is 6',
        validPolicyPrefixRequired: 'Valid Policy Prefix is required',
        legalOrgNameGt: 'Max allowed characters for Legal Organization Name is 500',
        legalOrgNameRequired: 'Legal Organization Name is required',
        sponsorCodeGt: 'Max allowed characters for Sponsor Code is 6',
        sponsorCodeRequired: 'Sponsor Code is required',
        validContractEffEndDateRequired: 'Valid Contract Effective End Date is required',
        validContEffStartDateRequired: 'Valid Contract Effective Start Date is required',
        validStartPremiumTargetRequired: 'Start Premium Target is required',
        targetFrequencyRequired: 'Target Frequency is required',
        validBonusAmountRequired: 'Valid Bonus Amount is required',
        validWebsiteURLRequired: 'Valid Website URL is required',
        validBonusReviewDateRequired: 'Valid Bonus Review Date is required',
        validSPBEffStartDateRequired: 'Valid Sales Performance Bonus Effective Start Date is required',
        validSPBEffEndDateRequired: 'Valid Sales Performance Bonus Effective End Date is required',
        bankInstNumRequired: 'Bank Institution Number is required',
        transitNumRequired: 'Transit Number is required',
        transitNumGt: 'Max allowed characters for Transit Number is 50',
        bankAcctNumRequired: 'Bank Account Number is required',
        bankAcctNumGt: 'Max allowed characters for Bank Account Number is 50',
        bankIndentRequired: 'Bank Indent is required',
        bankProvinceRequired: 'Bank Province is required',
        bankNameRequired: 'Bank Name is required',
        bankNameGt: 'Max allowed characters for Bank Name is 50',
        bankAcctCurrencyRequired: 'Bank Account Currency is required',
        bankAcctPurposeTypeRequired: 'Bank Account Purpose Type is required',
        validBankEffStartDateRequired: 'Valid Bank Info Effective Start Date is required',
        validBankInfoEffEndDateRequired: 'Valid Bank Info Effective End Date is required',
        paymentMethodRequired: 'Payment Method is required',
        paymentFrequencyRequired: 'Payment Frequency is required',
        validRefEffStartDateRequired: 'Valid Referral Effective Start Date is required',
        validReferralEffEndDateRequired: 'Valid Referral Effective End Date is required',
        overrideAmtRequired: 'Override Amount is required',
        amtTypeRequired: 'Amount Type is required',
        amtRequired: 'Amount Required',
        validPaymentDateRequired: 'Valid Payment Date is required',
        actualAmtPaidRequired: 'Actual Amount Paid is required',
        statusRequired: 'Status is required',
        validNextPremimumTagetRequired: 'Valid Next Premium Target is required',
        referralTypeRequired: 'Referral Type is required'
      },
      calendarLabels: {
        calendarAriaLabel: 'Calendar aria label',
        nextMonth: 'Next Month',
        prevMonth: 'Previous Month',
        textBoxAriaLabel: 'Date picker text box aria label',
        toggleAriaLabel: 'Date picker toggle aria label',
        togglePicker: 'Date picker toggle'
      },
      misc: {
        dateFormat: 'YYYY-MM-DD',
        targetFrequencyOptions: [
          {
            label: 'Monthly',
            value: 'MONTHLY'
          },
          {
            label: 'Quarterly',
            value: 'QUARTERLY'
          },
          {
            label: 'Semi-Annually',
            value: 'SEMI_ANNUALLY'
          },
          {
            label: 'Annually',
            value: 'ANNUALLY'
          }
        ],
        institutionNumberOptions: [
          {
            label: 'Bank of Montreal',
            value: '1'
          },
          {
            label: 'Bank Nova Scotia',
            value: '2'
          },
          {
            label: 'Royal Bank of Canada',
            value: '3'
          },
          {
            label: 'TD Canada Trust',
            value: '4'
          },
          {
            label: 'National Bank',
            value: '6'
          },
          {
            label: 'CIBC',
            value: '10'
          },
          {
            label: 'HSBC',
            value: '16'
          },
          {
            label: 'Canadian Western Bank',
            value: '30'
          },
          {
            label: 'Banque Laurentienne Du Canada',
            value: '39'
          },
          {
            label: 'Alberta Treasury',
            value: '219'
          },
          {
            label: 'Bank of America',
            value: '241'
          },
          {
            label: 'Korea Exchange Bank of Canada',
            value: '275'
          },
          {
            label: 'National Australia Bank',
            value: '286'
          },
          {
            label: 'Bank of China',
            value: '308'
          },
          {
            label: 'Manulife Bank',
            value: '540'
          },
          {
            label: 'Tangerine Bank',
            value: '614'
          },
          {
            label: 'CU Central 1',
            value: '809'
          },
          {
            label: 'Federation Des Caisses Desj',
            value: '815'
          },
          {
            label: 'Caisse Financial Group',
            value: '819'
          },
          {
            label: 'Motor City Community Credit Union',
            value: '828'
          },
          {
            label: 'Desjardins',
            value: '829'
          },
          {
            label: 'Wells Fargo',
            value: '834'
          },
          {
            label: 'Meridian Credit Union',
            value: '837'
          },
          {
            label: 'CU Central of NS',
            value: '839'
          },
          {
            label: 'Caisse Populaire Lagaceville Limite',
            value: '865'
          },
          {
            label: 'Portage CU',
            value: '879'
          },
          {
            label: 'CU Central of SK',
            value: '889'
          },
          {
            label: 'Servus CU',
            value: '899'
          }
        ],
        bankAcctPurposeTypeOptions: [
          {
            label: 'Compensation',
            value: 'COMPENSATION'
          },
          {
            label: 'Payment',
            value: 'PAYMENT'
          }
        ],
        paymentMethodOptions: [
          {
            label: 'EFT',
            value: 'EFT'
          },
          {
            label: 'Manual',
            value: 'MANUAL'
          }
        ],
        paymentFequencyOptions: [
          {
            label: 'Daily',
            value: 'DAILY'
          },
          {
            label: 'Weekly',
            value: 'WEEKLY'
          },
          {
            label: 'Biweekly',
            value: 'BIWEEKLY'
          },
          {
            label: 'Monthly',
            value: 'MONTHLY'
          },
          {
            label: 'Semi-Quarterly',
            value: 'SEMI_QUARTERLY'
          },
          {
            label: 'Quarterly',
            value: 'QUARTERLY'
          },
          {
            label: 'Semi-Annually',
            value: 'SEMI_ANNUALLY'
          },
          {
            label: 'Annually',
            value: 'ANNUALLY'
          }
        ],
        referralTypeOptions: [
          {
            label: 'Referraly only, no HST',
            value: 'REFERRAL_ONLY'
          },
          {
            label: 'Referraly only with HST',
            value: 'REFERRAL_ONLY_WITH_HST'
          },
          {
            label: 'Referraly and Commission only, no HST',
            value: 'REFERALL_AND_COMMISSION'
          },
          {
            label: 'Referraly and Commission with HST',
            value: 'REFERRAL_AND_COMMISSION_WITH_HST'
          }
        ],
        paymentTypeOptions: [
          {
            label: 'Marketing Payment',
            value: 'MMARKETING_PAYMENT'
          },
          {
            label: 'Good Will',
            value: 'GOOD_WILL'
          },
          {
            label: 'Annual Override',
            value: 'ANNUAL_OVERRIDE'
          },
          {
            label: 'Upfront Payment',
            value: 'UPFRONT_PAYMENT'
          },
          {
            label: 'Other - Fee for Service',
            value: 'OTHER_FEE_FOR_SERVICE'
          },
          {
            label: 'Other - Commission',
            value: 'OTHER_COMMISSION'
          },
          {
            label: 'Other - Income',
            value: 'OTHER_INCOME'
          },
          {
            label: 'Referral Program',
            value: 'REFERRAL_PROGRAM'
          }
        ],
        amountTypeOptions: [
          {
            label: 'Percentage',
            value: 'PERCENTAGE'
          },
          {
            label: 'Flat Amount',
            value: 'FLAT_AMOUNT'
          }
        ],
        statusOptions: [
          {
            label: 'Owing',
            value: 'OWING'
          },
          {
            label: 'Paid',
            value: 'PAID'
          },
          {
            label: 'In Progress',
            value: 'IN_PROGREES'
          }
        ],
        yesNoOptions: [
          {
            label: 'Yes',
            value: 'true'
          },
          {
            label: 'No',
            value: 'false'
          }
        ]
      }
    }
  },
  organizationSales: {
    labels: {
      formLabels: {
        defaultProvince: 'Default Province',
        region: 'Region',
        bdm: 'BDM',
        ssr: 'SSR',
        classification: 'Classification',
        clientType: 'Client Type',
        salesForceID: 'SalesForceID',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'test@manilife.com',
        phone: '12345'
      },
      formErrors: {
        defaultProvinceRequired: 'Default Province Error',
        regionRequired: 'Region  Error',
        bdmRequired: 'BDM  Error',
        classificationRequired: 'Classification Error',
        clientTypeRequired: 'Client Type  Error',
        salesForceIDRequired: 'SalesForceID  Error',
        firstNameRequired: 'firstName Required',
        lastNameRequired: 'lastName Required',
        emailRequired: 'email Required',
        phoneRequired: 'phone Required'
      },
      clientType: [
        { label: 'Canadian Client', value: 'CAN' },
        { label: 'US Client', value: 'US' }
      ],
      classification: [
        { label: 'Engagement Level to be Determined', value: '0' },
        { label: 'Fully Engaged Account', value: '1' }
      ]
    }
  },
  organizationSearch: {
    labels: {
      orgSearchDesc: 'A minimum of one field is required',
      orgFieldDesc: 'Select fields',
      orgCode: 'Organization Code',
      orgName: 'Organization Name',
      orgStatus: 'Organization Status',
      orgLevel: 'Organization Level',
      distCategory: 'Distributor Category',
      noData: 'No data available',
      reset: 'Reset',
      deleteBtn: 'Delete',
      searchApplied: 'Search Applied',
      addFields: 'Add Fields',
      orgSearchLabel: 'Organization Search',
      deleteAll: 'You have deleted all the Advanced Search fields.',
      addOne: 'Please add one field to narrow your search',
      orgCodeSt: 'Enter Organization Code',
      disCatStr: 'Enter Distribution Category',
      srchLabel: 'Search',
      orgCodeGt: 'Maximum allowed characters for Organization Code is 15.',
      oneParamReq: 'A minimum of one field is required',
      fieldOptions: [
        {
          label: 'Organization Code',
          value: 'code'
        },
        {
          label: 'Distributor Category',
          value: 'category'
        }
      ],
      resultLabel: 'Organization Search Result',
      prvFuncAria: 'Previous Page',
      nxtFuncAria: 'Next Page'
    }
  },
  organizationDistribution: {
    labels: {
      formLabels: {
        program: 'program',
        startDate: 'startDate',
        endDate: 'endDate',
        productAccordian: 'productAccordian',
        product: {
          category: 'product category',
          plan: 'plan',
          channel: 'channel'
        },
        appearance: 'appearance',
        addProduct: 'addProduct',
        removeProduct: 'removeProduct',
        invalidRange: 'invalidRange'
      },
      formErrors: {
        program: 'program',
        startDate: 'startDate',
        endDate: 'endDate',
        productAccordian: 'productAccordian',
        product: {
          category: 'product category',
          plan: 'plan',
          channel: 'channel'
        },
        appearance: 'appearance',
        addProduct: 'addProduct',
        removeProduct: 'removeProduct',
        invalidRange: 'invalidRange'
      },
      dateLabel: {
        nextMonth: 'nextMonth',
        prevMonth: 'prevMonth',
        togglePicker: 'togglePicker',
        textBoxAriaLabel: 'textBoxAriaLabel',
        toggleAriaLabel: 'toggleAriaLabel',
        calendarAriaLabel: 'calendarAriaLabel',
        dateFormat: 'dateFormat'
      },
      channels: [
        { label: 'B2B', value: 'B2B' },
        { label: 'B2C', value: 'B2c' }
      ]
    }
  }
};
