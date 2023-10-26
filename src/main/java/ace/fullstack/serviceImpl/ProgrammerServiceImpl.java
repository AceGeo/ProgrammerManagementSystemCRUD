package ace.fullstack.serviceImpl;

import ace.fullstack.dto.ProgrammerDto;
import ace.fullstack.entity.Programmer;
import ace.fullstack.exception.UserNotFoundException;
import ace.fullstack.repository.ProgrammerRepository;
import ace.fullstack.service.ProgrammerService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Service
    @AllArgsConstructor
    public class ProgrammerServiceImpl implements ProgrammerService {

        private ProgrammerRepository programmerRepository;
        private ModelMapper modelMapper;
        private static final Logger LOGGER = Logger.getLogger(ProgrammerService.class.getName());



    @Override
        public ProgrammerDto addProgrammer(ProgrammerDto programmerDto) {
           Programmer programmer = modelMapper.map(programmerDto, Programmer.class);

            Programmer saveProgrammer = programmerRepository.save(programmer);

            ProgrammerDto savedProgrammerDto = modelMapper.map(saveProgrammer, ProgrammerDto.class);
            return savedProgrammerDto;
        }

        @Override
        public ProgrammerDto getProgrammer(Long id) {

            LOGGER.info("The ID being processed is: " + id);
            Programmer programmer = programmerRepository.findById(id)
                    .orElseThrow(() -> new UserNotFoundException(id));
            return modelMapper.map(programmer,ProgrammerDto.class);
        }

    @Override
    public List<ProgrammerDto> getAllProgrammers() {
            List<Programmer> programmers = programmerRepository.findAll();
            return programmers.stream().map((programmer ->
                                        modelMapper.map(programmer, ProgrammerDto.class)))
                    .collect(Collectors.toList());
    }

    @Override
    public ProgrammerDto updateProgrammer(ProgrammerDto programmerDto, Long id) {

        Programmer programmer = programmerRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));

        programmer.setFirstName(programmerDto.getFirstName());
        programmer.setLastName(programmerDto.getLastName());
        programmer.setEmail(programmerDto.getEmail());
        programmer.setBirthday(programmerDto.getBirthday());
        programmer.setCountry(programmerDto.getCountry());
        programmer.setLanguages(programmerDto.getLanguages());

        Programmer updateProgrammer = programmerRepository.save(programmer);
        return modelMapper.map(updateProgrammer, ProgrammerDto.class);
    }

    @Override
    public void deleteProgrammer(Long id) {
        Programmer programmer = programmerRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        programmerRepository.deleteById(id);

    }

}
