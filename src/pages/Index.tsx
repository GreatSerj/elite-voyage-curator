import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plane, 
  Palmtree, 
  Heart, 
  UtensilsCrossed, 
  Mountain, 
  Waves, 
  Ship, 
  Users, 
  Clock, 
  Shield, 
  Star, 
  MessageCircle,
  ChevronDown,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    destination: '',
    dates: '',
    consent: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif font-bold text-primary">
              Premium Travel
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('formats')} className="text-sm hover:text-primary transition-colors">
                Форматы
              </button>
              <button onClick={() => scrollToSection('geography')} className="text-sm hover:text-primary transition-colors">
                География
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
                Обо мне
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">
                Отзывы
              </button>
              <Button onClick={() => scrollToSection('contact')} variant="default">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/60 via-foreground/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
              Премиальные путешествия под ключ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Создаю персональные маршруты в любой точке мира — от уединённых вилл на океане до насыщенных гастро-туров. 
              Забочусь о каждом шаге поездки, чтобы вы отдыхали, а не решали вопросы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                Оставить заявку
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {['20+ стран', '24/7 на связи', 'Индивидуальные маршруты', 'Конфиденциальность'].map((badge) => (
                <div key={badge} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('for-whom')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Для кого это
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Создаю путешествия для тех, кто ценит своё время и комфорт
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Предприниматели и руководители',
                desc: 'Спокойный отдых с продуманными деталями, где всё организовано идеально'
              },
              {
                icon: Heart,
                title: 'Пары и молодожёны',
                desc: 'Романтические маршруты и незабываемые моменты в самых красивых местах мира'
              },
              {
                icon: Users,
                title: 'Семьи с детьми',
                desc: 'Комфортные и безопасные путешествия с учётом потребностей каждого члена семьи'
              },
              {
                icon: Sparkles,
                title: 'Компании друзей',
                desc: 'Насыщенные активностями приключения или расслабленный отдых в уникальных локациях'
              }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Formats Section */}
      <section id="formats" className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Форматы путешествий
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            От спокойного пляжного отдыха до экстремальных экспедиций
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palmtree, title: 'Пляжный отдых', desc: 'Лучшие курорты и частные пляжи' },
              { icon: Heart, title: 'Медовый месяц', desc: 'Романтика в райских уголках мира' },
              { icon: UtensilsCrossed, title: 'Гастрономические туры', desc: 'Кулинарные открытия и Мишлен' },
              { icon: Mountain, title: 'Сафари и экспедиции', desc: 'Приключения в дикой природе' },
              { icon: Mountain, title: 'Горнолыжные курорты', desc: 'Премиальные склоны и шале' },
              { icon: Sparkles, title: 'Ретриты и SPA', desc: 'Перезагрузка и wellness' },
              { icon: Ship, title: 'Яхты и круизы', desc: 'Морские путешествия класса люкс' },
              { icon: Users, title: 'Корпоративные поездки', desc: 'Incentive-туры для команд' }
            ].map((format, i) => (
              <Card key={i} className="group hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <format.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{format.title}</h3>
                  <p className="text-sm text-muted-foreground">{format.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Куда я организую путешествия
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Работаю с лучшими направлениями по всему миру
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { region: 'Мальдивы', desc: 'Виллы на воде, идеальный медовый месяц', highlight: true },
              { region: 'ОАЭ', desc: 'Роскошь Дубая, пустынные приключения', highlight: false },
              { region: 'Европа', desc: 'Культурные маршруты, гастрономия, шопинг', highlight: false },
              { region: 'Япония', desc: 'Гастрономия, культура, городские маршруты', highlight: true },
              { region: 'Сейшелы', desc: 'Уединённые острова, дикая природа', highlight: false },
              { region: 'Африка', desc: 'Сафари, океан, экзотика', highlight: true }
            ].map((dest, i) => (
              <Card key={i} className={`overflow-hidden group hover:shadow-xl transition-shadow ${dest.highlight ? 'border-primary/30' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-2">{dest.region}</h3>
                      <p className="text-muted-foreground leading-relaxed">{dest.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Почему со мной удобно
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Беру на себя все заботы, чтобы вы наслаждались отдыхом
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: 'Экономия времени', desc: 'Беру на себя все задачи от подбора отеля до трансферов' },
              { icon: Star, title: 'Индивидуальный подход', desc: 'Маршруты под ваш стиль жизни, а не по шаблону' },
              { icon: CheckCircle2, title: 'Проверенное качество', desc: 'Только партнёры и отели с безупречной репутацией' },
              { icon: MessageCircle, title: 'Сопровождение 24/7', desc: 'На связи на протяжении всей поездки' },
              { icon: Shield, title: 'Конфиденциальность', desc: 'Полная безопасность ваших данных и запросов' },
              { icon: Sparkles, title: 'Продуманные детали', desc: 'Рестораны, билеты, активности, special requests' }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Как проходит работа
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Простой и понятный процесс от заявки до возвращения домой
          </p>
          
          <div className="max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Заявка', desc: 'Вы заполняете короткую форму или пишете в мессенджер' },
              { num: '02', title: 'Звонок / бриф', desc: 'Обсуждаем пожелания, бюджет, даты, формат отдыха' },
              { num: '03', title: 'Концепция', desc: 'Предлагаю варианты маршрутов и отелей' },
              { num: '04', title: 'Организация', desc: 'Бронирования, перелёты, трансферы, доп. сервисы' },
              { num: '05', title: 'Сопровождение', desc: 'Остаюсь с вами на связи до возвращения домой' }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 mb-12 last:mb-0">
                <div className="shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Кейсы путешествий
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Примеры организованных поездок
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                destination: 'Италия, 10 дней',
                format: 'Семейное путешествие',
                budget: 'Premium',
                details: [
                  'Частная вилла в Тоскане с панорамным видом',
                  'Экскурсии по винодельням с дегустациями',
                  'Кулинарные мастер-классы от шеф-повара',
                  'Трансферы на премиум-авто с водителем',
                  'Столики в мишленовских ресторанах'
                ]
              },
              {
                destination: 'Мальдивы, 7 дней',
                format: 'Медовый месяц',
                budget: 'Luxury',
                details: [
                  'Вилла на воде с частным бассейном',
                  'Романтический ужин на закате на яхте',
                  'SPA-процедуры для двоих',
                  'Подводная фотосессия',
                  'Трансфер на гидросамолёте'
                ]
              },
              {
                destination: 'Япония, 14 дней',
                format: 'Гастрономический тур',
                budget: 'Premium',
                details: [
                  'Токио, Киото, Осака: лучшие рестораны',
                  'Участие в чайной церемонии',
                  'Визит на рыбный рынок Цукидзи',
                  'Ночёвка в традиционном рёкане',
                  'JR Pass первого класса'
                ]
              }
            ].map((caseItem, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold mb-2">{caseItem.destination}</h3>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{caseItem.format}</span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{caseItem.budget}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {caseItem.details.map((detail, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Что говорят те, кто уже путешествовал со мной
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Анна М.',
                trip: 'Мальдивы',
                text: 'Это был наш идеальный медовый месяц! Каждая деталь была продумана до мелочей. Особенно запомнился романтический ужин на закате, который был организован как сюрприз. Спасибо за заботу и внимание!'
              },
              {
                name: 'Дмитрий К.',
                trip: 'Италия',
                text: 'Впервые путешествовал с полным сопровождением. Это невероятное ощущение — просто наслаждаться отдыхом, зная, что все вопросы решаются за тебя. Винные туры в Тоскане были выше всяких похвал!'
              },
              {
                name: 'Елена и Сергей',
                trip: 'Япония',
                text: 'Организация путешествия была безупречной. Все рестораны, отели, маршруты — всё подобрано идеально под наши интересы. Особенно ценим, что всегда можно было связаться и что-то скорректировать.'
              }
            ].map((review, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.trip}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop" 
                  alt="Travel Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Обо мне
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    За 10+ лет в индустрии премиального туризма я организовала сотни путешествий в 40+ странах мира. 
                    Моя философия проста: каждая поездка должна быть уникальной и безупречной.
                  </p>
                  <p>
                    Я не работаю по шаблонам. Вместо этого я внимательно слушаю, что важно именно для вас, 
                    и создаю маршрут, который идеально подходит под ваш стиль жизни и ожидания.
                  </p>
                  <p>
                    Мой фокус — премиальные путешествия, где важна каждая деталь. От выбора отеля до бронирования 
                    столика в ресторане с мишленовской звездой — я забочусь обо всём.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">40+</div>
                    <div className="text-sm text-muted-foreground">стран</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">поездок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Ответы на вопросы, которые чаще всего задают
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Как строится работа и оплата?',
                a: 'После согласования концепции путешествия я выставляю счёт на организацию. Оплата происходит в два этапа: 50% при бронировании и 50% за 30 дней до поездки. Все расходы прозрачны и обсуждаются заранее.'
              },
              {
                q: 'С какими бюджетами вы работаете?',
                a: 'Я специализируюсь на премиальных путешествиях. Минимальный бюджет зависит от направления и формата, но обычно начинается от 5000€ на человека за недельную поездку.'
              },
              {
                q: 'Можно ли учесть особые запросы?',
                a: 'Конечно! Я работаю с особенностями питания, медицинскими требованиями, путешествиями с детьми и любыми другими запросами. Индивидуальный подход — основа моей работы.'
              },
              {
                q: 'Вы работаете только с индивидуальными или и с группами?',
                a: 'Я организую как индивидуальные поездки, так и групповые — семейные путешествия, корпоративные выезды, incentive-туры для компаний до 20 человек.'
              },
              {
                q: 'Что делать, если во время поездки что-то пойдёт не по плану?',
                a: 'Я на связи 24/7 на протяжении всей поездки. Любая ситуация решается оперативно — у меня есть проверенные партнёры в каждом направлении, которые помогут в любой момент.'
              }
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Готовы к следующему путешествию?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и я свяжусь с вами в течение 24 часов, чтобы обсудить детали вашего идеального отдыха
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Контакт (WhatsApp / Telegram / телефон)</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Куда хотите поехать</label>
                  <Input 
                    placeholder="Страна или регион"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Примерные даты и формат поездки</label>
                  <Textarea 
                    placeholder="Например: конец мая, 10 дней, пляжный отдых для двоих"
                    value={formData.dates}
                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    Я согласен(а) на обработку персональных данных и получение информации о путешествиях
                  </label>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Premium Travel</h3>
              <p className="text-background/80 leading-relaxed">
                Создаю премиальные путешествия под ключ с заботой о каждой детали
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <div>WhatsApp: +7 (___) ___-__-__</div>
                <div>Telegram: @premium_travel</div>
                <div>Email: info@premiumtravel.ru</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-background/80">
                <div>Пн-Пт: 10:00 - 20:00</div>
                <div>Сб-Вс: 12:00 - 18:00</div>
                <div className="text-primary">Поддержка 24/7 во время поездки</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            © 2025 Premium Travel. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Floating Messenger Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default Index;
