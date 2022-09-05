import content_chapter from "../models/content_chapter_model";
import chapters from "../models/chapters_model";

 
class content_chapter_model {
  async store(req, res) {
    const content_chapter = await Content_chapter.create(req.body);
    return res.json(content_chapter)
  }
  async index(req, res) {
    const content_chapter = await Content_chapter.findAll({
        attributes: [
            'id','id_chapter', 'content', 'type'
        ],
        include: [
            { 
                model: chapters,
                as: 'chapters'
            }
        ]
    });
    return res.json(content_chapter)
  }
  async update(req, res) {
    let content_chapter = await Content_chapter.findByPk(req.params.id)
    content_chapter = await content_chapter.update(req.body)
    return res.json(content_chapter)
  }
  async delete(req, res) {
    let content_chapter = await Content_chapter.findByPk(req.params.id)
    content_chapter = await content_chapter.destroy(req.body)
    return res.json(content_chapter)
  }
  async show(req, res) {
    let aluno = await content_chapter.findByPk(req.params.id, {
        attributes: [
            'id','id_chapter', 'content', 'type'
        ],
        include: [
            { 
                model: chapters,
                as: 'chapters'
            }
        ]
    })
    return res.json(aluno)
  }
}
 
export default new content_chapter_model();