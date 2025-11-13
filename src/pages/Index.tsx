import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/33300037-8a33-4d07-86d4-9d0f530d2e8c.jpg" 
                alt="АЗМИР логотип"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground leading-tight">АЗМИР</h1>
                <p className="text-xs text-muted-foreground">Алтайский завод</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Продукция', 'Производство', 'О компании', 'Проекты', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <Button className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="main" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6 border border-primary/30">
              <span className="text-primary font-medium">Производство с 2015 года</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Металлоизделия<br />и резервуары
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl">
              Производство оборудования из нержавеющей стали для пищевой промышленности. 
              Резервуары, емкости, металлоконструкции — ручная сварка высочайшего качества.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Получить расчет
              </Button>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('проекты')}
                className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white border-0 text-lg px-8 shadow-lg"
              >
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Factory', value: '8+ лет', label: 'На рынке' },
              { icon: 'Package', value: '500+', label: 'Проектов' },
              { icon: 'Award', value: '100%', label: 'Качество' },
              { icon: 'Users', value: '15+', label: 'Специалистов' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-2">
                <Icon name={stat.icon} className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="продукция" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Производим металлоизделия и резервуары любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Резервуары из нержавеющей стали',
                description: 'Емкости для хранения продуктов, жидкостей, молока. Соответствие ГОСТ для пищевой промышленности.',
                icon: 'Container',
                image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/9d2e5155-f5d1-4c65-b0f0-94d2500dc6cc.jpg'
              },
              {
                title: 'Оборудование для пищевого производства',
                description: 'Емкости, баки, системы хранения из нержавейки AISI 304/316. Ручная аргонная сварка.',
                icon: 'Factory',
                image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/0722f825-272f-4f02-a6a7-8057eb67c5df.jpg'
              },
              {
                title: 'Изделия на заказ',
                description: 'Нестандартные конструкции из нержавеющей стали по вашим чертежам. Любая сложность.',
                icon: 'Wrench',
                image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/6f78ee9f-56c6-478a-b067-4498afa0f6d8.jpg'
              }
            ].map((product, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Icon name={product.icon} className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="производство" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше производство</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Специализируемся на производстве оборудования из нержавеющей стали для пищевой промышленности. 
              Аргонная сварка, соответствие санитарным нормам, индивидуальные решения любой сложности.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/6f78ee9f-56c6-478a-b067-4498afa0f6d8.jpg"
                alt="Процесс сварки"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Flame" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Аргонная сварка нержавейки</h3>
                  <p className="text-slate-300">
                    Профессиональная аргонодуговая сварка нержавеющей стали AISI 304/316. 
                    Герметичные швы для пищевого оборудования, соответствие санитарным требованиям.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Контроль качества</h3>
                  <p className="text-slate-300">
                    Каждое изделие проходит многоступенчатый контроль на всех этапах производства. 
                    Мы гарантируем соответствие всем техническим требованиям.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Индивидуальный подход</h3>
                  <p className="text-slate-300">
                    Небольшое производство позволяет уделять максимум внимания каждому проекту. 
                    Работаем с нестандартными решениями и сложными заказами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании АЗМИР</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Алтайский завод металлоизделий и резервуаров — производитель оборудования из нержавеющей стали 
                для пищевой и перерабатывающей промышленности.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Изготавливаем резервуары, емкости, технологические линии из нержавейки AISI 304 и AISI 316. 
                Применяем аргонодуговую сварку для герметичности и соответствия санитарным нормам. 
                Работаем с типовыми и индивидуальными проектами любой сложности.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground">Выполненных проектов</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-3xl font-bold text-foreground">8 лет</div>
                  <div className="text-muted-foreground">На рынке металлоизделий</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/9d2e5155-f5d1-4c65-b0f0-94d2500dc6cc.jpg"
                alt="Производство"
                className="rounded-lg shadow-lg h-64 object-cover"
              />
              <img 
                src="https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/0722f825-272f-4f02-a6a7-8057eb67c5df.jpg"
                alt="Металлоконструкции"
                className="rounded-lg shadow-lg h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Примеры выполненных работ</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Емкости из нержавейки для молочного завода', category: 'Пищевая промышленность', image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/9d2e5155-f5d1-4c65-b0f0-94d2500dc6cc.jpg' },
              { title: 'Резервуары AISI 304 для масложиркомбината', category: 'Производство масел', image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/0722f825-272f-4f02-a6a7-8057eb67c5df.jpg' },
              { title: 'Технологические емкости для мясопереработки', category: 'Мясная промышленность', image: 'https://cdn.poehali.dev/projects/0c2644c8-3d1e-43a8-bdfb-9e74c7a9a10f/files/6f78ee9f-56c6-478a-b067-4498afa0f6d8.jpg' },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm mb-2">{project.category}</div>
                      <div className="text-xl font-bold">{project.title}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Свяжитесь с нами</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Адрес производства</div>
                    <div className="text-slate-300">656037, Алтайский край, г. Барнаул, ул. Короленко, 65</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Телефон</div>
                    <div className="text-slate-300"><a href="tel:+79236776600" className="hover:text-primary transition-colors">+7 (923) 677-66-00</a></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-slate-300"><a href="mailto:prioritet-engin@mail.ru" className="hover:text-primary transition-colors">prioritet-engin@mail.ru</a></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Режим работы</div>
                    <div className="text-slate-300">Пн-Пт: 8:00 - 18:00<br />Сб: 9:00 - 15:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-8 bg-white text-foreground">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" className="w-full" />
                  </div>
                  <div>
                    <Input placeholder="Email" type="email" className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите ваш проект" rows={4} className="w-full" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/33300037-8a33-4d07-86d4-9d0f530d2e8c.jpg" 
                  alt="АЗМИР"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-bold">АЗМИР</h3>
                </div>
              </div>
              <p className="text-sm">
                Алтайский завод металлоизделий и резервуаров
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Резервуары из нержавейки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оборудование для пищевой</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Изделия на заказ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Проекты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>ул. Короленко, 65, Барнаул</li>
                <li><a href="tel:+79236776600" className="hover:text-primary transition-colors">+7 (923) 677-66-00</a></li>
                <li><a href="mailto:prioritet-engin@mail.ru" className="hover:text-primary transition-colors">prioritet-engin@mail.ru</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 АЗМИР. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;