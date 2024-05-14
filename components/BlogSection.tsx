import ArticleSlider from './ArticleSlider'
import Section from './Section'
const arabicArticles = [
  {
    id: 1,
    title: 'التسويق الرقمي: كل ما تحتاج معرفته',
    body: 'التسويق الرقمي هو استخدام الإنترنت ووسائل التكنولوجيا الرقمية للترويج للمنتجات والخدمات. يعتبر التسويق الرقمي أحد أهم الأدوات التي يمكن للشركات استخدامها للوصول إلى جمهور أوسع وزيادة المبيعات. في هذا المقال، سنتناول كل ما تحتاج معرفته حول التسويق الرقمي وكيف يمكنك البدء في استخدامه لتحقيق أهدافك التسويقية.',
    category: { name: 'تسويق', url_name: 'urlname', id: 1 },
    date: '12 يناير 2021',
    imge: 'images//1714210107.jpg',
  },
  {
    id: 2,
    title: 'تصميم المواقع: أفضل الممارسات',
    body: 'تعتبر تصميم المواقع أحد أهم عوامل نجاح أي موقع على الإنترنت. إذا كنت ترغب في جذب الزوار وتحسين تجربتهم على موقعك، فإن تصميم المواقع يجب أن يكون من أولوياتك. في هذا المقال، سنتناول أفضل الممارسات التي يجب اتباعها عند تصميم موقع إلكتروني.',
    category: { name: 'تصميم', url_name: 'urlname', id: 1 },
    date: '12 يناير 2021',
    imge: '',
  },
  {
    id: 3,
    title: 'برمجة التطبيقات: كيف تبدأ؟',
    body: 'إذا كنت ترغب في تطوير تطبيق جديد، فإن برمجة التطبيقات هي الخطوة الأولى التي يجب عليك اتخاذها. في هذا المقال، سنتناول كيفية البدء في برمجة تطبيقات الهاتف والويب والحصول على أفضل النتائج.',
    category: {
      name: 'تطوير',
      url_name: 'urlname',
      id: 1,
    },
    date: '12 يناير 2021',
    imge: '',
  },
  {
    id: 4,
    title: 'تصميم واجهات المستخدم: أفضل الممارسات',
    body: 'تعتبر تصميم واجهات المستخدم أحد أهم عوامل نجاح أي تطبيق أو موقع على الإنترنت. إذا كنت ترغب في تحسين تجربة المستخدم وجذب المزيد من الزوار، فإن تصميم واجهات المستخدم يجب أن يكون من أولوياتك. في هذا المقال، سنتناول أفضل الممارسات التي يجب اتباعها عند تصميم واجهات المستخدم.',
    category: { name: 'تصميم', url_name: 'urlname', id: 1 },
    date: '12 يناير 2021',
    imge: '',
  },
]
const englishArticles = [
  {
    id: 1,
    title: 'Digital Marketing: Everything You Need to Know',
    body: 'Digital marketing is the use of the internet and digital technology to promote products and services. Digital marketing is one of the most important tools that companies can use to reach a wider audience and increase sales. In this article, we will cover everything you need to know about digital marketing and how you can start using it to achieve your marketing goals.',
    category: {
      name: 'Marketing',
      url_name: 'urlname',
      id: 1,
    },
    date: '12 January 2021',
    imge: '',
  },
  {
    id: 2,
    title: 'Website Design: Best Practices',
    body: 'Website design is one of the most important factors for the success of any website on the internet. If you want to attract visitors and improve their experience on your website, website design should be one of your top priorities. In this article, we will cover the best practices to follow when designing a website.',
    category: { name: 'Design', url_name: 'urlname', id: 1 },
    date: '12 January 2021',
    imge: '',
  },
  {
    id: 3,
    title: 'App Development: How to Get Started?',
    body: 'If you want to develop a new app, app development is the first step you should take. In this article, we will cover how to get started with mobile and web app development and get the best results.',
    category: {
      name: 'Development',
      url_name: 'urlname',
      id: 1,
    },
    date: '12 January 2021',
    imge: '',
  },
  {
    id: 4,
    title: 'UI Design: Best Practices',
    body: 'User interface design is one of the most important factors for the success of any application or website on the internet. If you want to improve the user experience and attract more visitors, user interface design should be one of your top priorities. In this article, we will cover the best practices to follow when designing user interfaces.',
    category: { name: 'Design', url_name: 'urlname', id: 1 },
    date: '12 January 2021',
    imge: '',
  },
]
export default function BlogSection() {
  return (
    <Section name="blogSection">
      <ArticleSlider
        arabicArticles={arabicArticles}
        englishArticles={englishArticles}
      />
    </Section>
  )
}
