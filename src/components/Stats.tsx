import { AlertTriangle, TrendingDown, BookX } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: BookX,
      value: "53%",
      label: "não leram nenhum trecho de livro",
      detail: "107,6 milhões de brasileiros em três meses",
    },
    {
      icon: TrendingDown,
      value: "6,7 mi",
      label: "leitores perdidos desde 2019",
      detail: "O número de não leitores superou o de leitores",
    },
    {
      icon: AlertTriangle,
      value: "36%",
      label: "têm dificuldade de compreensão",
      detail: "72 milhões revelaram dificuldades para entender o que leem",
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
            Por que atuamos
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            A leitura no Brasil precisa de{" "}
            <span className="text-orange-light">pontes</span>
          </h2>

          <p className="text-lg text-white/80">
            Os dados mostram a urgência de iniciativas que promovam o acesso e o incentivo à leitura.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-accent/20 text-orange-light mb-6">
                <stat.icon size={32} />
              </div>

              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
                {stat.value}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>

              <p className="text-white/70 text-sm">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="text-center text-white/50 text-sm mt-12">
          Fonte: 6ª edição da pesquisa Retratos da Leitura no Brasil - Instituto Pró-Livro, 2025
        </p>
      </div>
    </section>
  );
};

export default Stats;
